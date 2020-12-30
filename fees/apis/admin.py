from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q as ComplexQuery
from fees.models import (
							Invoice,
							InvoiceLine,
							Payment,
							Fee,
							FeesConfig,
							StudentReceipt,
						)
from fees.serializers import (
								InvoiceCreateUpdateSerializer,
								InvoiceDetailSerializer,
								InvoiceLineCreateSerializer,
								AdminFeeCreateUpdateSerializer,
								AdminFeeListDetailSerializer,
								AdminPaymentCreateUpdateSerializer,
								AdminPaymentListDetailSerializer,
								AdminStudentReceiptDetailSerializer,
								FeesConfigSerializer
							)



class FeeViewSet(viewsets.ModelViewSet):
	queryset = Fee.objects.all().order_by('-id')

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'update', 'patch']:
			return AdminFeeCreateUpdateSerializer
		return AdminFeeListDetailSerializer



class FeesConfigViewSet(viewsets.ModelViewSet):
	queryset = FeesConfig.objects.all()
	serializer_class = FeesConfigSerializer

class InvoiceViewSet(viewsets.ModelViewSet):
	

	
	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
												'validated_by',
												'student',
												'bookkeeper',
												'entry',
											)
		return queryset

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	# def create(self, request, *args, **kwargs):
	#     serializer = self.get_serializer(data=request.data)
	#     if serializer.is_valid(raise_exception=True):
	# 	    self.perform_create(serializer)
	# 	    print(serializer.data)
	#     print(serializer.errors)
	#     headers = self.get_success_headers(serializer.data)
	#     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class QuotationViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	# def perform_create(self, serializer):
	# 	return serializer.save(
	# 		cashier=self.request.user, 
	# 		validated_by=self.request.user
	# 		)

	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											~ComplexQuery(status__in =[
														'invoice', 
														'sale', 
														'canceled', 
														'refunded', 
														'paid-partially'
														]) &
											~ComplexQuery(sale_type__in =[
													'credit',
													'cash'
												])
									)

		return queryset


	@action(methods=['POST', 'PUT', 'GET' ], detail=True)
	def make_invoice(self, *args, **kwargs):
		quotation = self.get_object()
		quotation.status = 'invoice'
		quotation.sale_type = 'credit'
		quotation.save()
		return Response({
				"message": 'Quotation has been succesfully converted into an Invoice'
			})



class UnverifiedInvoiceViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def perform_create(self, serializer):
		return serializer.save(
			cashier=self.request.user, 
			validated_by=self.request.user
			)

	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											ComplexQuery(status__in =[
														'invoice', 
														'paid-partially'
														]) &
											ComplexQuery(sale_type = 'credit') &
											ComplexQuery(draft=True)
									).order_by('-id')

		return queryset


	@action(methods=['POST', 'PUT', 'GET' ], detail=True)
	def verify_invoice(self, *args, **kwargs):
		invoice = self.get_object()
		invoice.draft = False
		invoice.create_entry()
		invoice.update_inventory()
		invoice.save()
		return Response({
				"message": 'Invoice has succesfully been verified'
			})




class OverdueInvoiceViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer



	def get_queryset(self, *args, **kwargs):
		unfiltered_queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											ComplexQuery(status__in =[
														'invoice', 
														'paid-partially'
														]) &
											ComplexQuery(sale_type = 'credit')
									).order_by('-id')

		queryset = []

		for query in unfiltered_queryset:
			if query.overdue:
				queryset.append(query)

		return queryset




class VoidedInvoiceViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											ComplexQuery(status = 'canceled') &
											ComplexQuery(sale_type__in = ['cash', 'credit']) &
											ComplexQuery(is_voided=True)
									).order_by('-id')

		return queryset




class RefundedInvoiceViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											ComplexQuery(status = 'refunded') &
											ComplexQuery(sale_type__in = ['cash', 'credit']),

									).order_by('-id')

		return queryset



class FullyPaidNotSaleInvoiceViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]
	lookup_field = 'id'
	
	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	# def perform_create(self, serializer):
	# 	return serializer.save(
	# 		cashier=self.request.user, 
	# 		validated_by=self.request.user
	# 		)

	def get_queryset(self, *args, **kwargs):
		unfiltered_queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'student',
											'bookkeeper',
											'entry',
										).filter(
											ComplexQuery(status__in =[
														'invoice', 
														'paid-partially'
														]) &
											ComplexQuery(sale_type__in = ['credit', 'cash'])
									).order_by('-id')

		queryset = []

		for query in unfiltered_queryset:
			if query.total_paid >= query.total:
				queryset.append(query)

		return queryset
		

	@action(methods=['POST', 'PUT', 'GET' ], detail=True)
	def make_sale(self, *args, **kwargs):
		invoice = self.get_object()
		invoice.status = 'sale'
		if not invoice.sale_type == 'cash':
			invoice.sale_type = 'cash'
		invoice.save()

		return Response({
				'message': 'Invoice has been succesfully converted into a Sale'
			})
		


class AdminPaymentViewSet(viewsets.ModelViewSet):
	
	# permission_classes = [
 #     A   permissions.IsAuthenticated,
 #    ]



	def get_serializer_class(self):
		if self.action in ['create', 'patch', 'patch']:
			return AdminPaymentCreateUpdateSerializer
		return AdminPaymentListDetailSerializer

	def perform_create(self, serializer):

		return serializer.save(bookkeeper=self.request.user)


	def get_queryset(self, *args, **kwargs):

		queryset = Payment.objects.prefetch_related(
												'invoice',
												'bookkeeper',
												'entry',
												'receipt'
											)
		return queryset



class AdminStudentReceiptViewSet(viewsets.ModelViewSet):

	queryset =StudentReceipt.objects.all().order_by('-id')
	serializer_class = AdminStudentReceiptDetailSerializer

































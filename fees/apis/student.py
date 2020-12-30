from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q as ComplexQuery
from fees.models import (
							Invoice,
							Payment,
							StudentReceipt,
						)
from fees.serializers import (
						StudentInvoiceDetailSerializer,
						StudentPaymentListDetailSerializer,
						StudentReceiptListDetailSerializer
						
					)



class StudentInvoiceViewSet(viewsets.ModelViewSet):
	serializer_class  = StudentInvoiceDetailSerializer

	def get_queryset(self, *args, **kwargs):
		student = self.request.user
		queryset = student.myinvoices.all()

		return queryset



class StudentReceiptViewSet(viewsets.ModelViewSet):
	serializer_class =StudentReceiptListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		student = self.request.user
		queryset = student.receipts.all()

		return queryset


































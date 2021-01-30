from rest_framework import serializers 
from fees.models import (
							Invoice,
							InvoiceLine,
							Fee,
							FeesConfig,
							Payment,
							StudentReceipt
						)
# from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value


class AdminFeeCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Fee
		fields = [
			'id',
			'name',
			'targets',
			'type',
			'amount',
		]


class AdminFeeListDetailSerializer(serializers.ModelSerializer):
	targets = serializers.SerializerMethodField()
	type = serializers.SerializerMethodField()


	class Meta:
		model = Fee
		fields = [
			'id',
			'name',
			'targets',
			'type',
			'amount',
		]

	def get_targets(self, obj):
		return obj.get_targets_display()


	def get_type(self, obj):
		return obj.get_type_display()


class FeesConfigSerializer(serializers.ModelSerializer):

	class Meta:
		model = FeesConfig
		fields = [
			'id',
			'default_invoice_comments',
			'default_quotation_comments',
			'default_terms',
			'tax',
			'include_tax_in_invoice',
			'include_units_in_fees_invoice',
			'use_combined_invoice',
			'is_configured'

		]



class InvoiceLineCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = InvoiceLine
		fields = ['pk', 'fee', 'quantity', 'tax', 'discount']



class InvoiceLineListSerializer(serializers.ModelSerializer):
	tax = StringSerializer()
	fee = StringSerializer()


	class Meta:
		model = InvoiceLine
		fields = [
			'id',  
			'fee',
			'tax', 
			'discount', 
			'total',
			'value',
			'reference_number',
		]




class InvoiceCreateUpdateSerializer(serializers.ModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)

	class Meta:
		model = Invoice
		fields = [
			'id',
			'status',
			'student', 
			'validated_by',
			'bookkeeper',
			'sale_type',
			'due',
			'terms',
			'comments',
			'lines',
		]




class InvoiceDetailSerializer(serializers.ModelSerializer):
	lines = InvoiceLineListSerializer(many=True, read_only=True)
	bookkeeper = StringSerializer()
	student = StringSerializer()
	status = serializers.SerializerMethodField()
	sale_type = serializers.SerializerMethodField()

	class Meta:
		model = Invoice
		fields = [
			'id',
			'tracking_number',
			'status',
			'sale_type',
			'student', 
			'bookkeeper',
			'due',
			'terms',
			'comments',
			'lines',
			'total',
			'overdue_days',
			'on_credit',
			'total_paid',
			'total_due',
			'returned_total',
		]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_sale_type(self, obj):
		return obj.get_sale_type_display()




class AdminPaymentCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:

		model = Payment
		fields = [
			'id',
			'amount', 
			'invoice',
			'method',
			'cashier',
			'comments',
		]


class AdminPaymentListDetailSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	bookkeeper = StringSerializer()

	class Meta:

		model = Payment
		fields = [
			'id',
			'reference_number',
			'amount', 
			'date', 
			'invoice',
			'method',
			'bookkeeper',
			'comments',
			'due',
			'entry',
		]






class AdminStudentReceiptDetailSerializer(serializers.ModelSerializer):
    cashier = StringSerializer()
    customer = StringSerializer()

    class Meta:
        model = StudentReceipt
        fields = [
            'id',
            'cashier',
            'receipt_number',
            'created_date',
            'customer',
            'comment',
            'has_finished',
            'has_error',
            'amount',
            'paid_as_of_date',
            'balance_as_of_date',
        ]


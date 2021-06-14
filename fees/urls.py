from rest_framework.routers import DefaultRouter
from .apis import (
		QuotationViewSet,
		AdminStudentReceiptViewSet,
		UnverifiedInvoiceViewSet,
		OverdueInvoiceViewSet,
		VoidedInvoiceViewSet,
		RefundedInvoiceViewSet,
		FullyPaidNotSaleInvoiceViewSet,
		InvoiceViewSet,
		StudentInvoiceViewSet,
		StudentReceiptViewSet,
		FeeViewSet,
		FeesConfigViewSet,
		AdminPaymentViewSet,
		AdminStudentReceiptViewSet

	)


router = DefaultRouter()

router.register(r'admin-payments', AdminPaymentViewSet, basename='admin-payments')
router.register(r'admin-receipts', AdminStudentReceiptViewSet, basename='admin-receipts')
router.register(r'fees', FeeViewSet, basename='fees')
router.register(r'fees-config', FeesConfigViewSet, basename='fees-config')
router.register(r'invoices', InvoiceViewSet, basename='invoices')
router.register(r'student-invoices', StudentInvoiceViewSet, basename='student-invoices')
router.register(r'student-receipts', StudentReceiptViewSet, basename='student-receipts')

#take from here
router.register(r'quotations', QuotationViewSet, basename='quotations')
router.register(r'unverified-invoices', UnverifiedInvoiceViewSet, basename='unverified-invoices')
router.register(r'overdue-invoices', OverdueInvoiceViewSet, basename='overdue-invoices')
router.register(r'voided-invoices', VoidedInvoiceViewSet, basename='voided-invoices')
router.register(r'refunded-invoices', RefundedInvoiceViewSet, basename='refunded-invoices')
router.register(r'fullypaid-not-yet-sales-invoices', FullyPaidNotSaleInvoiceViewSet, basename='fullypaid-not-yet-sales-invoices')


urlpatterns = router.urls



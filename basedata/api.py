from rest_framework import viewsets, generics, status, views
from rest_framework.response import Response


from .constants import (
				ACCOUNT_TYPES_CATEGORY_CHOICES,
				ACCOUNT_TYPES_CLASSIFICATION_CHOICES,
				ASSET_DEPRECIATION_METHOD_CHOICES, 
				ASSET_TYPE_CHOICES, 
				STUDENT_PAYMENT_METHODS_CHOICES,
				ACCOUNTING_PERIODS_CHOICES, 
				JOURNAL_ENTRY_TYPES_CHOICES,
				EMPLOYEES_GENDER_CHOICES, 
				INVENTORY_TYPES_CHOICES, 
				PRODUCT_COMPONENT_PRICING_CHOICES,
				EQUIPMENT_COMPONENT_CONDITION_CHOICES,
				INVENTORY_ORDER_STATUS_CHOICES,
				INVOICE_SALE_STATUS_CHOICES,
				INVOCE_LINE_CHOICES, 
				PROCCES_RATE_UNIT_TIME_CHOICES,
				MANUFACTURING_PRODUCT_TYPES,
				BILL_OF_MATERIALS_LINE_CHOICES,
				PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
				MANUFACTURING_PROCESS_CHOICES,
				NATURE_OF_EMPLOYMENT_CHOICES,
				EMPLOYEE_CONTRACT_TERMINATION_REASONS,
				EMPLOYEE_CATEGORY_CHOICES,
				EMPLOYEE_LEAVE_CATEGORIES,
				EMPLOYEE_LEAVE_STATUS_CHOICES,
				EMPLOYEE_LUNCH_CHOICES,
				EMPLOYEE_PAY_FREQUENCIES,
				EMPLOYEE_DEDUCTION_METHODS,
				EMPLOYEE_PAYROLL_DATE_CHOICES,
				EMPLOYEE_PAYSLIP_STATUS_CHOICES,
				EMPLOYEE_TIMESHEET_MONTH_CHOICES,
				EMPLOYEE_YEAR_CHOICES, 
				EMPLOYEE_PAYROLL_TAX_CHOICES,
				EVENT_REMINDER_CHOICES,
				EVENT_TIME_CHOICES,
				EVENT_ICON_CHOICES,
				EVENT_REPEAT_CHOICES,
				EVENT_PARTICIPANT_TYPES_CHOICES,
				EVENT_PRIORITY_CHOICES,
				MANUFACTURING_SHIFT_TIME_CHOICES,
				INVOICE_SALES_TYPES_CHOICES,
				# not yet handled
				BILLING_CHOICES,
				BILL_PAYMENT_METHODS_CHOICES,
				INVENTORY_ORDER_PAYMENT_METHODS_CHOICES,
				BILL_FREQUENCY_CHOICES,
				ACCOUNTS_BALANCE_SHEET_CATEGORIES,
				ACCOUNT_TYPE_CHOICES,
				INTEREST_INTERVAL_ACCOUNT_CHOICES,
				ACCOUNT_INTEREST_METHOD_CHOICES,
				INVENTORY_VALUATION_PERIOD_CHOICES,
				INVENTORY_VALUATION_METHODS_CHOICES,
				INVENTORY_CHECK_FREQUENCY_CHOICES,
				INVENTORY_CHECK_DATE_CHOICES,
				UNIT_OF_MEASURE_CHOICES,
				CUSTOMER_ADDRESSES_TYPE_CHOICES,
				EMPLOYEE_ATTENDANCE_STATUS_CHOICES,
				EMPLOYEES_TYPE_CHOICES,
				BILL_PAYMENT_STATUS_CHOICES,
				SUPPLIER_ADDRESSES_TYPE_CHOICES,
				SUPPLIER_STATUS_CHOICES,
				CUSTOMER_STATUS_CHOICES,
				STUDY_MODE_CHOICES,
				SCHOOL_NOTICE_TYPE_CHOICES,
				SCHOOL_NOTICE_BOARD_STATUS_CHOICES,
				INSTITUTION_STATUS_CHOICES,
				INSTITUTION_TYPE_CHOICES,
				PYSCHOMOTOR_CHOICES,
				TERM_CHOICES,
				STATUS_CHOICES,
				SCHOOL_HEAD_REPORT_CARDS,
				ONLINE_ADMISSION_STATUS_CHOICES,
				ATTENDANCE_STATUS_CHOICES,
				COURSES_STATUS_CHOICES,
				STUDY_NOTES_STATUS_CHOICES,
				STUDY_NOTES_APPROVAL_STATUS_CHOICES,
				USER_TYPE_CHOICES,
				USER_TITLE_CHOICES,
				GENDER_CHOICES,
				USER_STATUS_CHOICES,
				YEAR_CHOICES,
				STUDENT_CLASS_STATUS_CHOICES,
				BOOLEAN_CHOICES,
				LANGUAGE_CHOICES,
				COURSES_FORMAT_CHOICES,
				NUMBER_OF_SECTIONS_CHOICES,
				COURSE_HIDDEN_CHOICES,
				COURSE_LAYOUT_CHOICES,
				NUMBER_OF_ANNOUNCEMENTS_CHOICES,
				FILES_UPLOAD_CHOICES,
				COURSE_GROUPS_CHOICES,
				COURSE_VISIBILITY_CHOICES,
				COURSE_RATING_CHOICES,
				COURSE_GRADING_TYPE_CHOICES,
				GENERAL_GRADING_TYPE_CHOICES,
				FEES_TARGETS_CHOICES,
				FEES_TYPE_CHOICES,
				ACCOUNT_STATUS_CHOICES,
				
			)


class AccountStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class FeeTargetsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(FEES_TARGETS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)

class FeeTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(FEES_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class BillPaymentMethodsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILL_PAYMENT_METHODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class InventoryOrderPaymentMethodsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_ORDER_PAYMENT_METHODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class BillFrequencyChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILL_FREQUENCY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AccountBalanceSheetCategoriesChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNTS_BALANCE_SHEET_CATEGORIES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class AccountTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InterestIntervalAccountChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INTEREST_INTERVAL_ACCOUNT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AccountInterestMethodChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_INTEREST_METHOD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class InventoryValuationPeriodChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_VALUATION_PERIOD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InventoryValuationMethodsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_VALUATION_METHODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class InventoryCheckFrequencyChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_CHECK_FREQUENCY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InventoryCheckDateChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_CHECK_DATE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class UnitOfMeasureChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(UNIT_OF_MEASURE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CustomerAddressTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(CUSTOMER_ADDRESSES_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeesAttendanceStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_ATTENDANCE_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EmployeesTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEES_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class BillPaymentStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILL_PAYMENT_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SupplierAddressTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SUPPLIER_ADDRESSES_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class SupplierStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SUPPLIER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CustomerStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(CUSTOMER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class BillingChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILLING_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InvoiceSalesTypesChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVOICE_SALES_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class ManufacturingShiftTimeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(MANUFACTURING_SHIFT_TIME_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EventPriorityChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_PRIORITY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EventParticipantTypesChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_PARTICIPANT_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EventReminderChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_REMINDER_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EventTimeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_TIME_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EventIconChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_ICON_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EventRepeatChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EVENT_REPEAT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class EmployeePayrollTaxChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_PAYROLL_TAX_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class NatureOfEmploymentChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(NATURE_OF_EMPLOYMENT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmploymentContractTerminationReasonsAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_CONTRACT_TERMINATION_REASONS)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeeCategoryChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_CATEGORY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeeLeaveCategoryChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_LEAVE_CATEGORIES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EmployeeLeaveStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_LEAVE_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeeLunchChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_LUNCH_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeePayFrequenciesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_PAY_FREQUENCIES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EmployeeDeductionMethodsAPIView(views.APIView):
	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_DEDUCTION_METHODS)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class EmployeePayrollDateChoicesAPIView(views.APIView):
	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_PAYROLL_DATE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EmployeePayslipStatusChoicesAPIView(views.APIView):
	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_PAYSLIP_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeeTimesheetMonthChoicesAPIView(views.APIView):
	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_TIMESHEET_MONTH_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class EmployeeYearChoicesAPIView(views.APIView):
	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEE_YEAR_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AccountTypesCategoryChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_TYPES_CATEGORY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)






class AccountTypesClassificationChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_TYPES_CLASSIFICATION_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AssetsDepreciationMethodChoicesAPIView(generics.GenericAPIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ASSET_DEPRECIATION_METHOD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)






class AssetTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ASSET_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)





class AccountingPeriodsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNTING_PERIODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class JournalEntryTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(JOURNAL_ENTRY_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class EmployeesGenderChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEES_GENDER_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InventoryTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class ProductComponentPricingChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PRODUCT_COMPONENT_PRICING_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EquipmentComponentConditionChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EQUIPMENT_COMPONENT_CONDITION_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class InventoryOrderStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_ORDER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InvoiceSaleStatusChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVOICE_SALE_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InvoiceLineChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVOCE_LINE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class CustomerPaymentMethodsChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDENT_PAYMENT_METHODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class ProcessRateUnitTimeChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PROCCES_RATE_UNIT_TIME_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class ManufacturingProductTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(MANUFACTURING_PRODUCT_TYPES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class BillOfMaterialsLineChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILL_OF_MATERIALS_LINE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class ProcessedProductsStockStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class ManufacturingProcessChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(MANUFACTURING_PROCESS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class GeneralGradingTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(GENERAL_GRADING_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CourseGradingTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_GRADING_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class CourseRatingChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_RATING_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class CourseLayoutChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_LAYOUT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)





class CourseGroupsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_GROUPS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class FilesUploadsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(FILES_UPLOAD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


# class NumberOfAnnouncementsChoicesAPIView(views.APIView):


# 	def get(self, request, format=None):

# 		my_choices = []
# 		choice_dict = dict(NUMBER_OF_ANNOUNCEMENTS_CHOICES)
# 		for key, value in choice_dict.items():

# 			itered_dict = {"key": key, "value": value}
# 			my_choices.append(itered_dict)
# 		return Response(my_choices, status=status.HTTP_200_OK)


class NumberOfAnnouncementsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(NUMBER_OF_ANNOUNCEMENTS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CourseFormatChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSES_FORMAT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class LanguageChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(LANGUAGE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class BooleanChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BOOLEAN_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class StudentClassStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDENT_CLASS_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class UserStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class YearChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(YEAR_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class UserTitleChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_TITLE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class GenderChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(GENDER_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StudyNotesApprovalStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_NOTES_APPROVAL_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StaffTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)

class StudyNotesStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_NOTES_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class CoursesStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSES_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AttendanceStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ATTENDANCE_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class OnlineAdmissionStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ONLINE_ADMISSION_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolHeadReportStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_HEAD_REPORT_CARDS)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class TermChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(TERM_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class PsychomotorChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PYSCHOMOTOR_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InstitutionTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INSTITUTION_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InstitutionStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INSTITUTION_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolNoticeBoardStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_NOTICE_BOARD_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolNoticeTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_NOTICE_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StudyChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_MODE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)

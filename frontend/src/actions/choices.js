import axios from 'axios';
import {
    GET_ACCOUNT_TYPES_CATEGORY_CHOICES,
    GET_ACCOUNT_TYPES_CLASSIFICATION_CHOICES,
    GET_ASSETS_DEPRECIATION_METHOD_CHOICES,
    GET_ASSET_TYPES_CHOICES,
    GET_ACCOUNT_TYPE_CHOICES,
    GET_BILL_FREQUENCY_CHOICES,
    GET_ACCOUNT_BALANCE_SHEET_CATEGORIES_CHOICES,
    GET_INTEREST_INTERVAL_ACCOUNT_CHOICES,
    GET_ACCOUNT_INTEREST_METHOD_CHOICES,
    GET_INVENTORY_VALUATION_PERIOD_CHOICES,
    GET_INVENTORY_VALUATION_METHODS_CHOICES,
    GET_INVENTORY_CHECK_FREQUENCY_CHOICES,
    GET_INVENTORY_CHECK_DATE_CHOICES,
    GET_UNIT_OF_MEASURE_CHOICES,
    GET_CUSTOMER_ADDRESS_TYPE_CHOICES,
    GET_EMPLOYEES_ATTENDANCE_STATUS_CHOICES,
    GET_EMPLOYEES_TYPE_CHOICES,
    GET_BILL_PAYMENT_STATUS_CHOICES,
    GET_SUPPLIER_ADDRESS_TYPE_CHOICES,
    GET_SUPPLIER_STATUS_CHOICES,
    GET_CUSTOMER_STATUS_CHOICES,
    GET_BILLING_CHOICES,
    GET_BILL_PAYMENT_METHODS_CHOICES,
    GET_INVOICE_SALES_TYPES_CHOICES,
    GET_INVENTORY_ORDER_PAYMENT_METHODS_CHOICES,
    GET_MANUFACTURING_SHIFT_TIME_CHOICES,
    GET_EVENT_PRIORITY_CHOICES,
    GET_EVENT_PARTICIPANT_TYPES_CHOICES,
    GET_EVENT_REMINDER_CHOICES,
    GET_EVENT_TIME_CHOICES,
    GET_EVENT_ICON_CHOICES,
    GET_EVENT_REPEAT_CHOICES,
    GET_EMPLOYEE_PAYROLL_TAX_CHOICES,
    GET_NATURE_OF_EMPLOYMENT_CHOICES,
    GET_EMPLOYEE_YEAR_CHOICES,
    GET_EMPLOYEE_TIMESHEET_MONTH_CHOICES,
    GET_EMPLOYEE_PAYSLIP_STATUS_CHOICES,
    GET_EMPLOYEE_PAYROLL_DATE_CHOICES,
    GET_EMPLOYEE_DEDUCTION_METHODS,
    GET_EMPLOYEE_PAY_FREQUENCIES,
    GET_EMPLOYEE_LUNCH_CHOICES,
    GET_EMPLOYEE_LEAVE_STATUS_CHOICES,
    GET_EMPLOYEE_LEAVE_CATEGORY_CHOICES,
    GET_EMPLOYEE_CATEGORY_CHOICES,
    GET_EMPLOYMENT_CONTRACT_TERMINATION_REASONS,
    GET_ACCOUNTING_PERIODS_CHOICES,
    GET_JOURNAL_ENTRY_TYPES_CHOICES,
    GET_EMPLOYEES_GENDER_CHOICES,
    GET_INVENTORY_TYPES_CHOICES,
    GET_PRODUCT_COMPONENT_PRICING_CHOICES,
    GET_EQUIPMENT_COMPONENT_CONDITION_CHOICES,
    GET_INVENTORY_ORDER_STATUS_CHOICES,
    GET_INVOICE_SALES_CHOICES,
    GET_INVOICE_LINE_CHOICES,
    GET_MANUFACTURING_PROCESS_CHOICES,
    GET_CUSTOMER_PAYMENT_METHODS_CHOICES,
    GET_PROCESS_RATE_UNIT_TIME_CHOICES,
    GET_MANUFACTURING_PRODUCT_TYPES_CHOICES,
    GET_BILL_OF_MATERIALS_LINE_CHOICES,
    GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
    GET_GENERAL_GRADING_TYPE_CHOICES,
    GET_COURSE_GRADING_TYPE_CHOICES,
    GET_COURSE_RATING_CHOICES,
    GET_COURSE_LAYOUT_CHOICES,
    GET_COURSE_GROUPS_CHOICES,
    GET_FILE_UPLOADS_CHOICES,
    GET_NUMBER_OF_ANNOUNCEMENTS_CHOICES,
    GET_COURSE_FORMAT_CHOICES,
    GET_LANGUAGE_CHOICES,
    GET_BOOLEAN_CHOICES,
    GET_USER_STATUS_CHOICES,
    GET_YEAR_CHOICES,
    GET_STUDY_CHOICES,
    GET_SCHOOL_NOTICE_TYPE_CHOICES,
    GET_SCHOOL_NOTICEBOARD_STATUS_CHOICES,
    GET_INSTITUTIONS_STATUS_CHOICES,
    GET_INSTITUTION_TYPE_CHOICES,
    GET_PSYCHOMOTOR_CHOICES,
    GET_TERM_CHOICES,
    GET_SCHOOL_HEAD_REPORT_STATUS_CHOICES,
    GET_ONLINE_ADMISSION_STATUS_CHOICES,
    GET_ATTENDANCE_STATUS_CHOICES,
    GET_GENDER_CHOICES,
    GET_STUDENTS_CLASS_STATUS_CHOICES,
    GET_STUDYNOTES_STATUS_CHOICES,
    GET_STUDY_NOTES_APPROVAL_STATUS_CHOICES,
    GET_STAFF_TYPE_CHOICES,
    GET_COURSES_STATUS_CHOICES,
    GET_FEE_TARGETS_CHOICES,
    GET_FEE_TYPE_CHOICES,
    GET_ACCOUNT_STATUS_CHOICES,

} from '../types/choiceTypes';
import {
    generalgradingtypechoicesURL,
    coursegradingtypechoicesURL,
    courseratingchoicesURL,
    courselayoutchoicesURL,
    coursegroupschoicesURL,
    fileuploadschoicesURL,
    numberofannouncementschoicesURL,
    courseformatchoicesURL,
    languagechoicesURL,
    booleanchoicesURL,
    userstatuschoicesURL,
    yearchoicesURL,
    studychoicesURL,
    schoolnoticetypechoicesURL,
    schoolnoticeboardstauschoicesURL,
    institutionsstatuschoicesURL,
    institutiontypechoicesURL,
    psychomotorchoicesURL,
    termchoicesURL,
    schoolheadreportstatuschoicesURL,
    onlineadmissionstatuschoicesURL,
    attendancestatuschoicesURL,
    genderchoicesURL,
    studentsclassstatuschoicesURL,
    studynotesapprovalstatuschoicesURL,
    stafftypechoicesURL,
    coursestatuschoicesURL,
    studynotesstatuschoicesURL,
    feetargetschoicesURL,
    feetypechoicesURL,
    accountstatuschoicesURL,
} from '../constants';


export const getAccountStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(accountstatuschoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getFeeTargetsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(feetargetschoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_FEE_TARGETS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getFeeTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(feetypechoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_FEE_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getProcessedProductsStockStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/processed-products-stock-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillOfMaterialsLineChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/bill-of-materials-line-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_BILL_OF_MATERIALS_LINE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getManufacturingProductTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/manufacturing-product-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_MANUFACTURING_PRODUCT_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessRateUnitTimeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/process-rate-unit-time-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_PROCESS_RATE_UNIT_TIME_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCustomerPaymentMethodsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/customer-payment-methods-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_PAYMENT_METHODS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getManufacturingProcessChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/manufacturing-process-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_MANUFACTURING_PROCESS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceLineChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/invoice-line-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVOICE_LINE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceSalesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/invoice-sales-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVOICE_SALES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryOrderStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-order-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_ORDER_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEquipmentComponentConditionChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/equipment-component-condition-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EQUIPMENT_COMPONENT_CONDITION_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProductComponentPricingChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/product-component-pricing-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_COMPONENT_PRICING_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeesGenderChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employees-gender-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES_GENDER_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getJournalEntryTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/journal-entry-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_JOURNAL_ENTRY_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountingPeriodsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/accounting-periods-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNTING_PERIODS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmploymentContractTerminationReasons = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employment-contract-termination-reasons/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYMENT_CONTRACT_TERMINATION_REASONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeCategoryChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-category-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_CATEGORY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeLeaveCategoryChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-leave-category-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_LEAVE_CATEGORY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeLeaveStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-leave-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_LEAVE_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeLunchChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-lunch-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_LUNCH_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeePayFrequencies = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-pay-frequencies/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_PAY_FREQUENCIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeDeductionMethods = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-deduction-methods/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_DEDUCTION_METHODS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeePayrollDateChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-payroll-date-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_PAYROLL_DATE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeePayslipStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-payslip-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_PAYSLIP_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeTimesheetMonthChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-timesheet-month-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_TIMESHEET_MONTH_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeeYearChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-year-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_YEAR_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getNatureOfEmploymentChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/nature-of-employment-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_NATURE_OF_EMPLOYMENT_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeePayrollTaxChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employee-payroll-tax-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_PAYROLL_TAX_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getEventRepeatChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-repeat-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_REPEAT_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEventIconChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-icon-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_ICON_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEventTimeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-time-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_TIME_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEventReminderChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-reminder-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_REMINDER_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEventParticipantTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-participant-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_PARTICIPANT_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEventPriorityChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/event-priority-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EVENT_PRIORITY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getManufacturingShiftTimeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/manufactring-shift-time-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_MANUFACTURING_SHIFT_TIME_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryOrderPaymentMethodsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-order-payment-methods-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_ORDER_PAYMENT_METHODS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceSalesTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/invoice-sales-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVOICE_SALES_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillPaymentMethodsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/bill-payment-methods-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_BILL_PAYMENT_METHODS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillingChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/billing-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_BILLING_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getCustomerStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/customer-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getSupplierStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/supplier-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_SUPPLIER_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getSupplierAddressTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/supplier-address-type-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_SUPPLIER_ADDRESS_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillPaymentStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/bill-payment-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_BILL_PAYMENT_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeesTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employees-type-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeesAttendanceStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/employees-attendance-status-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES_ATTENDANCE_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCustomerAddressTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/customer-address-type-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_ADDRESS_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getUnitOfMeasureChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/unit-of-measure-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_UNIT_OF_MEASURE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryCheckDateChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-check-date-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_CHECK_DATE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryCheckFrequencyChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-check-frequency-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_CHECK_FREQUENCY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryValuationMethodsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-valuation-methods-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_VALUATION_METHODS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryValuationPeriodChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/inventory-valuation-period-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_VALUATION_PERIOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountInterestMethodChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/account-interest-method-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_INTEREST_METHOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInterestIntervalAccountChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/interest-interval-account-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_INTEREST_INTERVAL_ACCOUNT_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountBalanceSheetCategoriesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/account-balance-sheet-categories-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_BALANCE_SHEET_CATEGORIES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillFrequencyChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/bill-frequency-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_BILL_FREQUENCY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAccountTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/account-type-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAssetTypesChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/asset-types-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ASSET_TYPES_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAssetsDepriciationMethodChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/assets-depriciation-method-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ASSETS_DEPRECIATION_METHOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountTypesCategoryChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/account-types-category-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPES_CATEGORY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountTypesClassificationChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get('http://127.0.0.1:8000/api/basedata/account-types-classification-choices/', headers)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPES_CLASSIFICATION_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getGeneralGradingTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(generalgradingtypechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_GENERAL_GRADING_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseGradingTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(coursegradingtypechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSE_GRADING_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseRatingChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(courseratingchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSE_RATING_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseLayoutChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(courselayoutchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSE_LAYOUT_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseGroupsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(coursegroupschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSE_GROUPS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getFileUploadsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(fileuploadschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_FILE_UPLOADS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getNumberOfAnnouncementsChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(numberofannouncementschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_NUMBER_OF_ANNOUNCEMENTS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseFormatChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(courseformatchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSE_FORMAT_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getLanguageChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(languagechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_LANGUAGE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getBooleanChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(booleanchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_BOOLEAN_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getUserStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(userstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_USER_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getYearChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(yearchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_YEAR_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getStudyChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studychoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_STUDY_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getSchoolNoticeTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(schoolnoticetypechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_SCHOOL_NOTICE_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getSchoolNoticeboardStausChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(schoolnoticeboardstauschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_SCHOOL_NOTICEBOARD_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getInstitutionsStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(institutionsstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_INSTITUTIONS_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getInstitutionTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(institutiontypechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_INSTITUTION_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getPsychomotorChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(psychomotorchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_PSYCHOMOTOR_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getTermChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(termchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_TERM_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getSchoolHeadReportStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(schoolheadreportstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_SCHOOL_HEAD_REPORT_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getOnlineAdmissionStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(onlineadmissionstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_ONLINE_ADMISSION_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getAttendanceStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(attendancestatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_ATTENDANCE_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getGenderChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(genderchoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_GENDER_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getStudentsClassStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studentsclassstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_STUDENTS_CLASS_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getStudyNotesApprovalStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studynotesapprovalstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_STUDY_NOTES_APPROVAL_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getStaffTypeChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(stafftypechoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_STAFF_TYPE_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getCourseStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(coursestatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_COURSES_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getStudynotesStatusChoices = (token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    axios.get(studynotesstatuschoicesURL, headers)
    .then(res => {
        dispatch({
            type: GET_STUDYNOTES_STATUS_CHOICES,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

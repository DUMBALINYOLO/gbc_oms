const localhost = "https://www.gererebusinesscollege.co.za"
// const localhost = "http://127.0.0.1:8000"


const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`


//accounting
export const accountsURL = `${endpoint}/accounting/accounts/`
export const interestbearingaccountsURL = `${endpoint}/accounting/interest-bearing-accounts/`
export const journalsURL = `${endpoint}/accounting/journals/`
export const ledgersURL = `${endpoint}/accounting/ledgers/`
export const accountingpostsURL = `${endpoint}/accounting/accounting-posts/`
export const workbooksURL = `${endpoint}/accounting/workbooks/`
export const accountingadjustmentsURL = `${endpoint}/accounting/accounting-adjustments/`
export const debitsURL = `${endpoint}/accounting/debits/`
export const creditsURL = `${endpoint}/accounting/credits/`
export const fullypaidnotverifiedbillsURL = `${endpoint}/accounting/fully-paid-not-verified-bills/`
export const fullypaidbillsURL = `${endpoint}/accounting/fully-paid-bills/`
export const unpostedandunadjustedjournalentriesURL = `${endpoint}/accounting/unposted-and-unadjusted-journal-entries/`
export const unadjustedjournalentriesURL = `${endpoint}/accounting/unadjusted-journal-entries/`
export const unpostedjournalentriesURL = `${endpoint}/accounting/unposted-journal-entries/`
export const postedjournalentriesURL = `${endpoint}/accounting/posted-journal-entries/`
export const journalentriesURL = `${endpoint}/accounting/journal-entries/`
export const inactiveaccountsURL = `${endpoint}/accounting/in-active-accounts/`
export const assetsURL = `${endpoint}/accounting/assets/`
export const taxesURL = `${endpoint}/accounting/taxes/`
export const currenciesURL = `${endpoint}/accounting/currencies/`
export const billsURL = `${endpoint}/accounting/bills/`
export const billpaymentsURL = `${endpoint}/accounting/bill-payments/`


//manufacture
export const unverifiedproductionprocessesURL = `${endpoint}/manufacture/unverified-production-processes/`
export const verifiedproductionprocessesURL = `${endpoint}/manufacture/verified-production-processes/`
export const processmachinesURL = `${endpoint}/manufacture/process-machines/`
export const processmachinegroupsURL = `${endpoint}/manufacture/process-machine-groups/`
export const shiftsURL = `${endpoint}/manufacture/shifts/`
export const shiftschedulesURL = `${endpoint}/manufacture/shift-schedules/`
export const processratesURL = `${endpoint}/manufacture/process-rates/`
export const productionordersURL = `${endpoint}/manufacture/production-orders/`
export const manufacturingteamsURL = `${endpoint}/manufacture/manufacturing-teams/`
export const manufacturingpersonelsURL = `${endpoint}/manufacture/manufacturing-personels/`
export const processproductsURL = `${endpoint}/manufacture/process-products/`
export const wastegenerationreportsURL = `${endpoint}/manufacture/waste-generation-reports/`
export const processedproductstockreceiptsURL = `${endpoint}/manufacture/processed-product-stock-receipts/`
export const processedproductstockadjustmentsURL = `${endpoint}/manufacture/processed-product-stock-adjustments/`
export const processedproductstocktakesURL = `${endpoint}/manufacture/processed-product-stock-takes/`
export const manufacturedstockitemsURL = `${endpoint}/manufacture/manufactured-stock-items/`
export const productionprocessesURL = `${endpoint}/manufacture/production-processes/`

//inventory
export const inventorycategoriesURL = `${endpoint}/inventory/inventory-categories/`
export const debitnotesURL = `${endpoint}/inventory/debit-notes/`
export const inventoryordersURL = `${endpoint}/inventory/inventory-orders/`
export const inventoryorderpaymentsURL = `${endpoint}/inventory/inventory-orderpayments/`
export const warehousesURL = `${endpoint}/inventory/warehouses/`
export const inventoryitemsURL = `${endpoint}/inventory/inventory-items/`
export const inventorystockitemsURL = `${endpoint}/inventory/inventorystockitems/`
export const storagemediasURL = `${endpoint}/inventory/storagemedias/`
export const orderitemsURL = `${endpoint}/inventory/orderitems/`
export const inventoryreceiptsURL = `${endpoint}/inventory/inventoryreceipts/`
export const stockadjustmentsURL = `${endpoint}/inventory/stockadjustments/`
export const inventorystocktakesURL = `${endpoint}/inventory/inventorystocktakes/`
export const activesuppliersURL = `${endpoint}/inventory/active-suppliers/`
export const deactivedsuppliersURL = `${endpoint}/inventory/de-actived-suppliers/`
export const supplieraddressesURL = `${endpoint}/inventory/supplier-addresses/`
export const rawmaterialsURL = `${endpoint}/inventory/raw-materials/`
export const equipmentsURL = `${endpoint}/inventory/equipments/`
export const consumablesURL = `${endpoint}/inventory/consumables/`
export const fullyreceivedandtotalpaidforordersURL = `${endpoint}/inventory/fully-received-and-total-paid-for-orders/`
export const fullyreceivedtotalpaidforandverifiedordersURL = `${endpoint}/inventory/fully-received-total-paid-for-and-verified-orders/`

//events
export const upcomingeventsURL = `${endpoint}/events/upcoming-events/`
export const completedeventsURL = `${endpoint}/events/completed-events/`
export const eventconfigURL = `${endpoint}/events/event-config/`

//customers
export const deactivatedcustomersURL = `${endpoint}/customers/deactivated-customers/`
export const customeraddressesURL = `${endpoint}/customers/customer-addresses/`
export const activecustomersURL = `${endpoint}/customers/active-customers/`

// cash
export const cashdrawersURL = `${endpoint}/cash/cash-drawers/`

//employees
export const employeesURL= `${endpoint}/employees/employees/`
export const employeeconfigURL= `${endpoint}/employees/employee-config/`
export const employeecontractsURL= `${endpoint}/employees/employee-contracts/`
export const employeecontractsterminationsURL= `${endpoint}/employees/employee-contracts-terminations/`
export const employeedepartmentsURL= `${endpoint}/employees/employee-departments/`
export const employeeleavesURL= `${endpoint}/employees/employee-leaves/`
export const employeepaygradesURL= `${endpoint}/employees/employee-paygrades/`
export const employeeallowancesURL= `${endpoint}/employees/employee-allowances/`
export const employeepaydeductionsURL= `${endpoint}/employees/employee-pay-deductions/`
export const employeepaycommissionrulesURL= `${endpoint}/employees/employee-pay-commission-rules/`
export const employeepayrolltaxesURL= `${endpoint}/employees/employee-payroll-taxes/`
export const employeepayrollschedulesURL= `${endpoint}/employees/employee-payroll-schedules/`
export const employeepayrolldatesURL= `${endpoint}/employees/employee-payroll-dates/`
export const employeepayslipsURL= `${endpoint}/employees/employee-payslips/`
export const employeeattendancetimesheetsURL= `${endpoint}/employees/employee-attendance-timesheets/`
export const companyshareholdersURL= `${endpoint}/employees/company-shareholders/`
export const companymanagersURL= `${endpoint}/employees/company-managers/`
export const companybookkeepersURL= `${endpoint}/employees/company-bookkeepers/`
export const companypayrollofficersURL= `${endpoint}/employees/company-payroll-officers/`
export const companydriversURL= `${endpoint}/employees/company-drivers/`
export const companymanufacturingpersonellsURL= `${endpoint}/employees/company-manufacturing-personells/`
export const companyinventorycontrollersURL= `${endpoint}/employees/company-inventory-controllers/`
export const companysalesrepsURL= `${endpoint}/employees/company-salesreps/`
export const pendingemployeeleavesURL= `${endpoint}/employees/pending-employee-leaves/`
export const authorisedemployeeleavesURL= `${endpoint}/employees/authorised-employee-leaves/`
export const declinedemployeeleavesURL= `${endpoint}/employees/declined-employee-leaves/`

//fees
export const adminpaymentsURL = `${endpoint}/fees/admin-payments/`
export const invoicesURL= `${endpoint}/fees/invoices/`
export const adminreceiptsURL= `${endpoint}/fees/admin-receipts/`
export const invoicelinesURL= `${endpoint}/fees/invoicelines/`
export const quotationsURL= `${endpoint}/fees/quotations/`
export const unverifiedinvoicesURL= `${endpoint}/fees/unverified-invoices/`
export const overdueinvoicesURL= `${endpoint}/fees/overdue-invoices/`
export const voidedinvoicesURL= `${endpoint}/fees/voided-invoices/`
export const refundedinvoicesURL= `${endpoint}/fees/refunded-invoices/`
export const fullypaidnotyetsalesinvoicesURL= `${endpoint}/fees/fullypaid-not-yet-sales-invoices/`
export const feesURL= `${endpoint}/fees/fees/`
export const feesconfigURL= `${endpoint}/fees/fees-config/`
export const studentinvoicesURL= `${endpoint}/fees/student-invoices/`
export const studentreceiptsURL= `${endpoint}/fees/student-receipts/`

//basedata
export const generalgradingtypechoicesURL = `${endpoint}/basedata/general-grading-type-choices/`
export const coursegradingtypechoicesURL = `${endpoint}/basedata/course-grading-type-choices/`
export const courseratingchoicesURL = `${endpoint}/basedata/course-rating-choices/`
export const courselayoutchoicesURL = `${endpoint}/basedata/course-layout-choices/`
export const coursegroupschoicesURL = `${endpoint}/basedata/course-groups-choices/`
export const fileuploadschoicesURL = `${endpoint}/basedata/file-uploads-choices/`
export const numberofannouncementschoicesURL = `${endpoint}/basedata/number-of-announcements-choices/`
export const courseformatchoicesURL = `${endpoint}/basedata/course-format-choices/`
export const languagechoicesURL = `${endpoint}/basedata/language-choices/`
export const booleanchoicesURL = `${endpoint}/basedata/boolean-choices/`
export const userstatuschoicesURL = `${endpoint}/basedata/user-status-choices/`
export const yearchoicesURL = `${endpoint}/basedata/year-choices/`
export const studychoicesURL = `${endpoint}/basedata/study-choices/`
export const schoolnoticetypechoicesURL = `${endpoint}/basedata/school-notice-type-choices/`
export const schoolnoticeboardstauschoicesURL = `${endpoint}/basedata/school-noticeboard-staus-choices/`
export const institutionsstatuschoicesURL = `${endpoint}/basedata/institutions-status-choices/`
export const institutiontypechoicesURL = `${endpoint}/basedata/institution-type-choices/`
export const psychomotorchoicesURL = `${endpoint}/basedata/psychomotor-choices/`
export const termchoicesURL = `${endpoint}/basedata/term-choices/`
export const schoolheadreportstatuschoicesURL = `${endpoint}/basedata/school-head-report-status-choices/`
export const onlineadmissionstatuschoicesURL = `${endpoint}/basedata/online-admission-status-choices/`
export const attendancestatuschoicesURL = `${endpoint}/basedata/attendance-status-choices/`
export const genderchoicesURL = `${endpoint}/basedata/gender-choices/`
export const studentsclassstatuschoicesURL = `${endpoint}/basedata/students-class-status-choices/`
export const studynotesapprovalstatuschoicesURL = `${endpoint}/basedata/study-notes-approval-status-choices/`
export const stafftypechoicesURL = `${endpoint}/basedata/staff-type-choices/`
export const coursestatuschoicesURL = `${endpoint}/basedata/course-status-choices/`
export const studynotesstatuschoicesURL = `${endpoint}/basedata/studynotes-status-choices/`
export const feetargetschoicesURL = `${endpoint}/basedata/fee-targets-choices/`
export const feetypechoicesURL = `${endpoint}/basedata/fee-type-choices/`
export const accountstatuschoicesURL = `${endpoint}/basedata/account-status-choices/`

//people
export const adminstudentsURL = `${endpoint}/people/admin-students/`
export const adminprincipalsURL = `${endpoint}/people/admin-principals/`
export const adminteachersURL = `${endpoint}/people/admin-teachers/`
export const adminbursarsURL = `${endpoint}/people/admin-bursars/`
export const adminparentsURL = `${endpoint}/people/admin-parents/`
export const bursarparentsURL = `${endpoint}/people/bursar-parents/`
export const bursarstudentsURL = `${endpoint}/people/bursar-students/`
export const createstudentURL = `${endpoint}/people/create-student/`
export const createbursarURL = `${endpoint}/people/create-bursar/`
export const createprincipalURL = `${endpoint}/people/create-principal/`
export const createteacherURL = `${endpoint}/people/create-teacher/`
export const parentprofilesURL = `${endpoint}/people/parent-profiles/`
export const principalprofilesURL = `${endpoint}/people/principal-profiles/`
export const teacherprofilesURL = `${endpoint}/people/teacher-profiles/`
export const bursarprofilesURL = `${endpoint}/people/bursar-profiles/`
export const studentprofilesURL = `${endpoint}/people/student-profiles/`
export const loginURL = `${endpoint}/people/login/`

export const testrecordsURL = `${endpoint}/people/test-records/`
export const excerciserecordsURL = `${endpoint}/people/excercise-records/`
export const assignmentrecordsURL = `${endpoint}/people/assignment-records/`
export const attendancerecordsURL = `${endpoint}/people/attendance-records/`

//courses
export const adminupcomingcoursesURL = `${endpoint}/courses/admin-upcoming-courses/`
export const adminongoingcoursesURL = `${endpoint}/courses/admin-ongoing-courses/`
export const adminfinishedcoursesURL = `${endpoint}/courses/admin-finished-courses/`
export const admininactivecoursesURL = `${endpoint}/courses/admin-inactive-courses/`
export const admintopicsURL = `${endpoint}/courses/admin-topics/`
export const adminreviewsURL = `${endpoint}/courses/admin-reviews/`
export const adminsubtopicsURL = `${endpoint}/courses/admin-subtopics/`
export const admintopicobjectivesURL = `${endpoint}/courses/admin-topic-objectives/`
export const admintopicguidelinesURL = `${endpoint}/courses/admin-topic-guidelines/`
export const adminstudynotesURL = `${endpoint}/courses/admin-study-notes/`
export const adminstudynotesimagesURL = `${endpoint}/courses/admin-study-notes-images/`
export const adminstudynotesnotesURL = `${endpoint}/courses/admin-study-notes-notes/`
export const adminstudynotesfilesURL = `${endpoint}/courses/admin-study-notes-files/`
export const adminstudynotesvideosURL = `${endpoint}/courses/admin-study-notes-videos/`
export const adminstudynotesreferencesURL = `${endpoint}/courses/admin-study-notes-references/`
export const adminauthorsURL = `${endpoint}/courses/admin-authors/`
export const adminpublishercitiesURL = `${endpoint}/courses/admin-publisher-cities/`
export const adminpublishersURL = `${endpoint}/courses/admin-publishers/`
export const studentcourseenrollmentsURL = `${endpoint}/courses/student-course-enrollments/`
export const courseenrollmentstatuschoicesURL = `${endpoint}/basedata/course-enrollment-status-choices/`
export const upcomingstudentcoursesURL = `${endpoint}/courses/upcoming-student-courses/`
export const ongoingstudentcoursesURL = `${endpoint}/courses/ongoing-student-courses/`

//classes
export const classesURL = `${endpoint}/classes/classes/`
export const classstreamsURL = `${endpoint}/classes/class-streams/`
export const classsubjectsURL = `${endpoint}/classes/class-subjects/`
export const classstudentsURL = `${endpoint}/classes/class-students/`
export const enrollmentsURL = `${endpoint}/classes/enrollments/`
export const studymodechoicesURL = `${endpoint}/basedata/study-mode-choices/`
export const unenrolledstudentsURL = `${endpoint}/classes/unenrolled-students/`




//attendance
export const adminattendancesURL = `${endpoint}/attendance/admin-attendances/`
export const teacherattendancesURL = `${endpoint}/attendance/teacher-attendances/`
export const studentattendancesURL = `${endpoint}/attendance/student-attendances/`
export const studentattendancerecordsURL = `${endpoint}/attendance/student-attendance-records/`

//gradings
export const adminstudenttestsURL = `${endpoint}/grading/admin-student-tests/`
export const adminstudentassignmentsURL = `${endpoint}/grading/admin-student-assignments/`
export const adminstudentexcercisesURL = `${endpoint}/grading/admin-student-excercises/`
export const teacherstudenttestsURL = `${endpoint}/grading/teacher-student-tests/`
export const teacherstudentexcercisesURL = `${endpoint}/grading/teacher-student-excercises/`
export const teacherstudentassignmentsURL = `${endpoint}/grading/teacher-student-assignments/`
export const studentexcercisesURL = `${endpoint}/grading/student-excercises/`
export const studenttestsURL = `${endpoint}/grading/student-tests/`
export const studentassignmentsURL = `${endpoint}/grading/student-assignments/`
export const gradingasignmentrecordsURL = `${endpoint}/grading/asignment-records/`


export const gradingtestrecordsURL = `${endpoint}/grading/grading-test-records/`
export const gradingexcerciserecordsURL = `${endpoint}/grading/grading-excercise-records/`

//curriculum
export const subjectsURL = `${endpoint}/curriculum/subjects/`
export const curriculumsURL = `${endpoint}/curriculum/curriculums/`

//reports
export const statscountersURL = `${endpoint}/reports/stats-counters`

//adverts
export const courseadvertsURL = `${endpoint}/adverts/course-adverts/`


//MESSAGING
export const enquiriesURL = `${endpoint}/messaging/enquiries/`

//admissions
export const studentadmissionsURL = `${endpoint}/admissions/student-admissions/`
export const pendingstudentadmissionsURL = `${endpoint}/admissions/pending-student-admissions/`
export const rejectedstudentadmissionsURL = `${endpoint}/admissions/rejected-student-admissions/`
export const meetingstudentadmissionsURL = `${endpoint}/admissions/meeting-student-admissions/`
export const acceptedstudentadmissionsURL = `${endpoint}/admissions/accepted-student-admissions/`
export const applicationsURL = `${endpoint}/admissions/applications/`

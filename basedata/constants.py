import datetime
from .utilities import time_choices

ACCOUNT_TYPES_CATEGORY_CHOICES = [
        (100, 'Do Not Choose Me'),
        (0, 'Asset'),
        (1, 'Liability'),
        (2, 'Equity'),
        (3, 'Revenue'),
        (4, 'Operating Expense')

    ]

ACCOUNT_STATUS_CHOICES = [
        ('active', 'ACTIVE'),
        ('inactive', 'INACTIVE'),
    ]


ACCOUNT_TYPES_CLASSIFICATION_CHOICES = [
        ('NONE', ''),
        (100, 'Do Not Choose Me'),
        (1, 'Current'),
        (2, 'Long-Term')
    ]
    
ACCOUNT_TYPE_CHOICES = [
        ('expense', 'Expense'), 
        ('asset', 'Asset'), 
        ('liability', 'Liability'), 
        ('equity', 'Equity'), 
        ('income', 'Income'),
        ('cost-of-sales', 'Cost of Sales')]




ACCOUNTS_BALANCE_SHEET_CATEGORIES = [
        ('current-assets', 'Current Assets'),
        ('non-current-assets', 'Long Term Assets'),
        ('current-liabilites', 'Current Liabilites'),
        ('long-term-liabilites', 'Long Term Liabilites'),
        ('equity', 'Equity'),
        ("not-included", "Not Included")
    ]

INTEREST_INTERVAL_ACCOUNT_CHOICES = [(0, 'monthly'), (1, 'annually')]
ACCOUNT_INTEREST_METHOD_CHOICES = [(0, 'Simple'), (1, 'Complex')]



ASSET_DEPRECIATION_METHOD_CHOICES = [
        (0, 'Straight Line'),
        (1, 'Sum of years digits'),
        (2, 'Double Declining balance')
    ]

ASSET_TYPE_CHOICES = [
        (0, 'Land'),
        (1, 'Buildings'),
        (2, 'Vehicles'),
        (3, 'LeaseHold Improvements'),
        (4, 'Furniture and Fixtures'),
        (5, 'Equipment')
    ]

BILL_PAYMENT_STATUS_CHOICES = [
                    ('pending', 'PENDING'),
                    ('PartiallyPaid', 'PARTIALLY PAID'),
                    ('Paid', 'FULLY PAID') 
                ]


ACCOUNTING_PERIODS_CHOICES = [
    (0, "Annually"),
    (1, "Monthly"),
    (2, "Weekly")
]


JOURNAL_ENTRY_TYPES_CHOICES = [
        (0, 'Regular'),
        (1, 'Adjusting'),
        (2, 'Closing'),
        (3, 'Reversing')

    ]


EMPLOYEES_GENDER_CHOICES = [
        ('male','Male'),
        ('female','Female')
    ]

EMPLOYEES_TYPE_CHOICES = [
        ('Owner','OWNER'),
        ('Manager','MANAGER'),
        ('BookKeeper','BOOKKEEPER'),
        ('PayrollOfficer','PAYROLL OFFICER'),
        ('Driver','DRIVER'),
        ('Manufacturing','MANUFACTRING'),
        ('InventoryController','INVENTORYCONTROLLER'),
        ('SalesRep', 'SALES REPRESANTATIVES')

    ]

NATURE_OF_EMPLOYMENT_CHOICES = [
        ('A', 'Arduous'),
        ('N', 'Normal')
    ]

EMPLOYEE_CONTRACT_TERMINATION_REASONS = [
        ('R', 'Retirement'),
        ('C', 'Casual Employee'),
        ('D', 'Death'),
        ('O', 'Other')
    ]

EMPLOYEE_CATEGORY_CHOICES = [
        ('Temporary', 'Temporary Employee'),
        ('Subcontractor', 'Subcontractor'),
        ('Permanent Employee', 'Permanent Employee')
    ]


EMPLOYEE_LEAVE_CATEGORIES = [
        (1, 'Annual Leave'),
        (2, 'Sick Leave'),
        (3, 'Study Leave'),
        (4, 'Maternity Leave'),
        (5, 'Parental Leave'),
        (6, 'Bereavement Leave')
    ]

EMPLOYEE_LEAVE_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('authorized', 'Authorized'),
        ('declined', 'Declined')
    ]

EMPLOYEE_LUNCH_CHOICES = [
        (datetime.timedelta(minutes=15), '15 min.'),
        (datetime.timedelta(minutes=30), '30 min.'),
        (datetime.timedelta(minutes=45), '45 min.'),
        (datetime.timedelta(hours=1), '1 hr.')

    ]

EMPLOYEE_PAY_FREQUENCIES = [
        (0, 'Weekly'),
        (1, 'Bi-Monthly'),
        (2, 'Monthly')
    ]


EMPLOYEE_DEDUCTION_METHODS = [
        (0, 'Custom'), 
        (1, 'Fixed')
    ]


EMPLOYEE_PAYROLL_DATE_CHOICES = [(i, i) for i in range(1, 29)]

EMPLOYEE_PAYSLIP_STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('verified', 'Verified'),
        ('paid', 'Paid'),
    ]

EMPLOYEE_TIMESHEET_MONTH_CHOICES = [
        (1, 'January'),
        (2,'February'),
        (3, 'March'),
        (4, 'April'),
        (5, 'May'),
        (6, 'June'),
        (7, 'July'),
        (8, 'August'),
        (9, 'September'),
        (10, 'October'),
        (11, 'November'),
        (12, 'December')
    ]


EMPLOYEE_YEAR_CHOICES = [
        (i, i) for i in range(2000, 2051)
    ]


INVENTORY_VALUATION_PERIOD_CHOICES =[
        (30, 'Month'),
        (90, 'Quarter'),
        (182, 'Six Months'),
        (365, 'One Year')
    ]


INVENTORY_VALUATION_METHODS_CHOICES =[
        (1, 'Direct Pricing'),
        (2, 'Margin'),
        (3, 'Markup')
    ]
INVENTORY_CHECK_FREQUENCY_CHOICES = [
        (1, 'Monthly'),
        (2, 'Quarterly'),
        (3, 'Bi-Annually'),
        (4, 'Annually')
    ]

INVENTORY_CHECK_DATE_CHOICES = [(i, i) for i in range(31, 1)]



INVENTORY_TYPES_CHOICES = [
        ('Equipment', 'EQUIPMENT'),
        ('Consumables', 'CONSUMABLES'),
        ('RawMaterial', 'RAW MATERIAL'),
    ]




PRODUCT_COMPONENT_PRICING_CHOICES = [
        (0, 'Manual'),
        (1, 'Margin'),
        (2, 'Markup')
    ]




EQUIPMENT_COMPONENT_CONDITION_CHOICES = [
        ('EXCELLENT', 'Excellent'),
        ('GOOD', 'Good'),
        ('POOR', 'Poor'),
        ('BROKEN', 'Not Functioning')
    ]

EMPLOYEE_PAYROLL_TAX_CHOICES =[
                    (0, 'Employees'), 
                    (1, 'Employer'), 
                    (2, 'Both')
                ]


INVENTORY_ORDER_STATUS_CHOICES = [
        ('received-partially', 'Partially Received'),
        ('received', 'Received in Total'),
        ('draft', 'Internal Draft'),
        ('order', 'Order')
    ]

INVOICE_SALE_STATUS_CHOICES = [
        ('quotation', 'Quotation'),
        ('invoice', 'Invoice'),
        ('canceled', 'Cancelled'),
        ('refunded', 'Refunded'),
        ('invoice', 'Invoice'),
        ('sale', 'Sale or Paid in Full'),
        ('paid-partially', 'Paid Partially'),
    ]

INVOICE_SALES_TYPES_CHOICES = [
    ('credit', 'CREDIT'),
    ('cash', 'CASH'),
    ('quotation', 'Quotation')
]


INVOCE_LINE_CHOICES = [
        (2, 'service'),
        (1, 'product'),
        
    ]

STUDENT_PAYMENT_METHODS_CHOICES = [
            ("cash", "Cash" ),
            ("transfer", "Transfer"),
            ("debit card", "Debit Card"),
            ("mobile", "Mobile-Transfer")
        ]

PROCCES_RATE_UNIT_TIME_CHOICES = [
            (0, 'per second'),
            (1, 'per minute'),
            (2, 'per hour'),
        ]


MANUFACTURING_PRODUCT_TYPES = [
        (0, 'Product'),
        (1, 'By-Product'),
        (2, 'Co-Product'),
        (3, 'Waste')
    ]

BILL_OF_MATERIALS_LINE_CHOICES = [
        (0, 'Raw Material'),
        (1, 'Process Product'),
    ]

MANUFACTURING_PROCESS_CHOICES = [
    (0, 'Line'),
    (1, 'Batch')

]


PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES = [
        (10, 'ITEM-IN-STOCK'),
        (15, 'ITEM-INCOMING'),
        (20, 'ITEM-IN-PROGRESS'),
        (25, 'ITEM-COMPLETE'),
        (50, 'ITEM-ATTENTION'),
        (55, 'ITEM-DAMAGED'),
        (60, 'ITEM-DESTROYED'),

    ]


EVENT_REMINDER_CHOICES = [
        (datetime.timedelta(seconds=0), 'At event start'),
        (datetime.timedelta(minutes=15), '15 min before'),
        (datetime.timedelta(hours=1), '1 hour before'),
        (datetime.timedelta(hours=3), '3 hour before'),
        (datetime.timedelta(hours=6), '6 hours before'),
        (datetime.timedelta(days=1), '1 Day before'),
        (datetime.timedelta(days=3), '3 Days before'),
        (datetime.timedelta(days=7), '1 week before'),
        (datetime.timedelta(days=14), '2 weeks before'),
        (datetime.timedelta(days=30), '1 month before')
    ]

EVENT_TIME_CHOICES = time_choices('01:00:00','23:30:00','00:30:00')

MANUFACTURING_SHIFT_TIME_CHOICES = time_choices('01:00:00','23:30:00','00:30:00')


EVENT_ICON_CHOICES = [
        ('file-chart-line', 'Report'),
        ('truck', 'Delivery'),
        ('users', 'Meeting'),
        ('stopwatch', 'Deadline'),
        ('book', 'Training'),
        ('calendar', 'Event')
    ]

EVENT_REPEAT_CHOICES = [
        (0, 'Never'),
        (1, 'Daily'),
        (2, 'Weekly'),
        (3, 'Monthly'),
        (4, 'Annually'),

    ]

EVENT_PARTICIPANT_TYPES_CHOICES = [
        (0, 'Employee'),
        (1, 'Customer'),
        (2, 'Vendor')
    ]

EVENT_PRIORITY_CHOICES = [
        ('normal', 'Normal'),
        ('high', 'High'),
        ('low', 'Low')
    ]


INVENTORY_ORDER_PAYMENT_METHODS_CHOICES = [
            ("cash", "Cash" ),
            ("transfer", "Transfer"),
            ("debit card", "Debit Card"),
            ("mobile", "Mobile-Transfer")
        ]



BILL_PAYMENT_METHODS_CHOICES = [
            ("cash", "Cash" ),
            ("transfer", "Transfer"),
            ("debit card", "Debit Card"),
            ("mobile", "Mobile-Transfer")
        ]

BILLING_CHOICES = [
    (0, 'ADVERTISING'), 
    (1, 'BANK SERVICE CHARGES'),
    (2,'DUES AND SUBSCRIPTIONS'),
    (3, 'EQUIPMENT_RENTAL'),
    (4, 'TELEPHONE'),
    (5, 'VEHICLES'),
    (6, 'TRAVEL AND EXPENSES'),
    (7, 'SUPPLIES'),
    (8, 'SALARIES AND WAGES'),
    (9, 'RENT'),
    (10, 'PAYROLL TAXES'),
    (11, 'LEGAL AND ACCOUNTING'),
    (12, 'INSURANCE'), 
    (13, 'OFFICE EXPENSES'),
    (14, 'CARRIAGE OUTWARDS'),
    (15, 'TRAINING'),
    (16, 'VENDOR SERVICES'),
    (17, 'OTHER'),
]


BILL_FREQUENCY_CHOICES = [
    ('recurring', 'RECURRING'),
    ('once_off', 'ONCE-OFF')
]


UNIT_OF_MEASURE_CHOICES =[
    ('Ounce', 'OUNCE'),
    ('Pound', 'POUND'),
    ('Ton', 'TON'),
    ('Gram', 'GRAM'),
    ('Kilogram', 'KILOGRAM'),
    ('FluidOunce', 'FLUIDOUNCE'),
    ('Pint', 'PINT'),
    ('Quart', 'QUART'),
    ('Gallon', 'GALLON'),
    ('Milliliter', 'MILLILITER'),
    ('Metercubed', 'CUBICMETER'),
    ('MiliGram', 'MILIGRAM'),
    ('Liter', 'LITER'),
    ('Dozen', 'DOZEN'),
    ('Count', 'COUNT'),
    ('Cartoon', 'CARTOON'),

]

CUSTOMER_ADDRESSES_TYPE_CHOICES = [
                ('shipping', 'SHIPPING ADDRESS'),
                ('billing', 'BILLING ADDRESS')
            ]


EMPLOYEE_ATTENDANCE_STATUS_CHOICES = [
            ('Present', 'PRESENT'),
            ('Mission', 'ON A MISSION'),
            ('Sick', 'SICK'),
            ('Absent', 'ABSENT'),
        ]

SUPPLIER_ADDRESSES_TYPE_CHOICES = [
                ('shipping', 'SHIPPING ADDRESS'),
                ('billing', 'BILLING ADDRESS')
            ]

CUSTOMER_STATUS_CHOICES = [
                    ('active', 'ACTIVE'),
                    ('de-activated', 'DE ACTIVATED')
                ]

SUPPLIER_STATUS_CHOICES = [
                    ('active', 'ACTIVE'),
                    ('de-activated', 'DE ACTIVATED')
                ]





STUDY_MODE_CHOICES = [
		('studied', 'STUDIED'),
		('unstudied', 'NOT STUDIED')
	]


SCHOOL_NOTICE_TYPE_CHOICES = [
			('school', 'ENTIRE SCHOOL'),
			('klass', 'CERTAIN CLASS'),
			('student', 'INDIVIDUAL STUDENT')
		]


SCHOOL_NOTICE_BOARD_STATUS_CHOICES = [
			('published', 'PUBLISHED'),
			('draft', "DRAFT"),
			('cancelled', 'CANCELLED')
		]


INSTITUTION_STATUS_CHOICES = [
		('day', 'DAY'),
		('boarding', 'BOARDING')
	]

INSTITUTION_TYPE_CHOICES = [
				('school', 'SCHOOL'),
				('college', 'COLLEGE'),
			]


PYSCHOMOTOR_CHOICES = (
    ('VERY_WEAK', 'Very Weak'),
    ('WEAK', 'Weak'),
    ('FAIR', 'Fair'),
    ('GOOD', 'Good'),
    ('EXCELLENT', 'Excellent')
)



TERM_CHOICES = (
    (1, 'First Term'),
    (2, 'Second Term'),
    (3, 'Third Term')
)

STATUS_CHOICES = (
    ('A', ('Active')),
    ('G', ('Graduated')),
    ('S', ('Suspended')),
    ('E', ('Expelled')),
    ('L', ('Left'))
)

SPECIAL_NEEDS = (
    ('Yes', 'Yes'),
    ('No', 'No')
)


SCHOOL_HEAD_REPORT_CARDS = [
			('a', 'Excellent Piece of Work Keep it up'),
			('b', 'Student can do better than this'),

		]


TEST_TYPE_CHOICES = (
    ('excercise', 'EXCERCISE'),
    ('test', 'TEST'),
    ('practice', 'PRACTICE'),
    ('exam', 'EXAM'),
)


ONLINE_ADMISSION_STATUS_CHOICES = [
		('pending', 'PENDING'),
		('approved', 'APPROVED'),
		('declined', 'DECLINED'),
		('meeting', 'REQUESTING A MEETING')
	]


ATTENDANCE_STATUS_CHOICES = [
				('present', 'PRESENT'),
				('absent', 'ABSENT'),
				('sick', 'SICK'),
				('dismissed', 'DISMISSED'),
				('absconded', 'ABSCONDED')
			]


COURSES_STATUS_CHOICES = [
				('upcoming', 'UPCOMING'),
				('ongoing', 'ONGOING'),
				('finished', 'FINISHED'),
				('inactive', 'DE ACTIVATED'),

			]


STUDY_NOTES_STATUS_CHOICES = [
				('locked', 'LOCKED'),
				('unlocked', 'UNLOCKED'),
			]

STUDY_NOTES_APPROVAL_STATUS_CHOICES = [
				('approved', 'APPROVED'),
				('pending', 'PENDING APPROVAL'),
				('disapproved', 'DISAPPROVED'),

			]



USER_TYPE_CHOICES = [
			('principal', 'Principal'),
			('teacher', 'Teacher'),
			('student', 'Student'),
			('parent', 'Parent'),
            ('clerk', 'Clerk'),
            ('bursar', 'Bursar'),
            ('none', 'None'),

		]


USER_TITLE_CHOICES = [
		('sir', 'SIR'),
		('miss', 'MISS'),
		('mr', 'MR'),
		('mrs', 'MRS'),
		('doc', 'Doctor'),
		('prof', 'Proffesor')
	]


GENDER_CHOICES = [
		('male', 'MALE'),
		('female', 'FEMALE')

	]

USER_STATUS_CHOICES = [
		('pending', 'Pending Activation'),
		('active', 'Activated'),
		('de-activated', 'de-activated')
	]


YEAR_CHOICES = [
		(1, 2019),
		(2, 2020),
		(3, 2021)
    ]



STUDENT_CLASS_STATUS_CHOICES = [
			('active', 'Active'),
			('inactive', 'InActive'),
			('dormant', 'Dormant'),
			('aged', 'Aged')
	]


BOOLEAN_CHOICES = [
		('yes', 'YES'),
		('no', 'NO')
	]


LANGUAGE_CHOICES = [
			('none', 'None'),
			('english', 'ENGLISH'),
			('ndebele', 'NDEBELE'),
			('shona', "SHONA"),
			('kalanga', "KALANGA"),
			('tonga', "TONGA"),
			('venda', "VENDA")
		]


COURSES_FORMAT_CHOICES = [
		('single_act', 'SINGE ACTIVITY FORMAT'),
		('social', 'SOCIAL FORMAT'),
		('topics', "TOPICS FORMAT"),
		('weekly', 'WEEKLY FORMAT')
	]

NUMBER_OF_SECTIONS_CHOICES = [
		(i, i) for i in range(0, 1000)
	]

COURSE_HIDDEN_CHOICES = [
			(1, 'Hidden Sections are shown in Collapsed Form'),
			(2, 'Hidden Sections are Completely Invisible')
		]


COURSE_LAYOUT_CHOICES = [
		(1, 'Show all Sections in One Page'),
		(2, 'Show One Section Per Page')

	]



NUMBER_OF_ANNOUNCEMENTS_CHOICES = [
		(i, i) for i in range(0, 1000)
	]


FILES_UPLOAD_CHOICES =[
		(100, '100MB'),
		(50, '5OMB'),
		(20, '20MB'),
		(10, '10MB'),
		(5, '5MB'),
		(2, '2MB'),
		(1, '1MB'),
		(500, '500KB'),
		(1000, '100KB'),
		(10000, '10KB'),
		(500, '50KB')
	]


COURSE_GROUPS_CHOICES = [
		(1, 'NO GROUPS'),
		(2, 'SEPERATE GROUPS'),
		(3, 'VISIBLE GROUPS'),

	]


COURSE_VISIBILITY_CHOICES = [
		('show', 'SHOW'),
		('hide', 'HIDE')
	]

COURSE_RATING_CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5')
    )


COURSE_GRADING_TYPE_CHOICES = [
		('excercise', 'EXCERCISE'),
		('asignment', 'ASIGNMENT'),
		('test', 'TEST'),
	]



GENERAL_GRADING_TYPE_CHOICES = [
		('excercise', 'EXCERCISE'),
		('asignment', 'ASIGNMENT'),
		('test', 'TEST'),
	]


STUDENT_DISCIPLINARY_ACTION_CHOICES = [
		('handled', 'HANDLED'),
		('punished', 'PUNISHED'),
		('suspended', 'SUSPENDED'),
		('expulsion', 'EXPULSIONED')

	]
STUDENT_DISCIPLINARY_ISSUE_STATUS_CHOICES =[
		('minor', 'MINOR ISSUE'),
		('serious', 'SERIOUS'),
		('severe', 'VERY SEVERE')
	]


ATTENDANCE_STATUS = [
			('present', 'PRESENT'),
			('absent', 'ABSENT'),
			('sick', 'SICK')
		]



COURSE_ENROLLMENT_STATUS_CHOICES = [
	("enroll", 'ENROLLED'),
	("disenroll", "DIS ENROLLED")
]


COURSE_SCHOOL_VISIBILITY_STATUS_CHOICES = [
	('visible', "VISIBLE"),
	('invisible', "INVISIBLE"),

]


CLASS_STREAM_CHOICES = [
	('one', "FORM ONE"),
	('two', "FORM TWO"),
	('three', 'FORM THREE'),
	('four', 'FORM FOUR'),
	('five', 'FORM FIVE'),
	('six', 'FORM SIX'),
	('college', 'COLLEGE'),
]


COURSE_TO_SUBJECT_STATUS_CHOICES = [
	("add", "ADDED"),
	('remove', "REMOVED")
]


CLASS_ENROLLMENT_STATUS_CHOICES = [
		('enroll', 'ENROLLED'),
		('disenroll', 'DISENROLLED')
]


FEES_TARGETS_CHOICES = [
    ('individual', 'INDIVIDUAL'),
    ('all', 'ALL STUDENTS'),
    ('eights', 'GRADE 8'),
    ('nines', 'GRADE 9'),
    ('tens', 'GRADE 10'),
    ('elvens', 'GRADE 11'),
    ('twelves', 'GRADE 12'),
    ('other', 'OTHER'),

]


FEES_TYPE_CHOICES = [
    ('once', 'ONCE-OFF'),
    ('often', 'OFTEN'),
]







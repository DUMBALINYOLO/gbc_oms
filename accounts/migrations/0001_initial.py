# Generated by Django 3.0.7 on 2021-01-25 07:58

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('account_number', models.CharField(default=None, max_length=255, null=True, unique=True)),
                ('balance', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('type', models.CharField(choices=[('expense', 'Expense'), ('asset', 'Asset'), ('liability', 'Liability'), ('equity', 'Equity'), ('income', 'Income'), ('cost-of-sales', 'Cost of Sales')], max_length=32)),
                ('description', models.TextField()),
                ('bank_account', models.BooleanField(default=False)),
                ('control_account', models.BooleanField(default=False)),
                ('balance_sheet_category', models.CharField(choices=[('current-assets', 'Current Assets'), ('non-current-assets', 'Long Term Assets'), ('current-liabilites', 'Current Liabilites'), ('long-term-liabilites', 'Long Term Liabilites'), ('equity', 'Equity'), ('not-included', 'Not Included')], default='current-assets', max_length=32)),
                ('active', models.CharField(choices=[('active', 'ACTIVE'), ('inactive', 'INACTIVE')], default='inactive', max_length=123)),
                ('updated_date', models.DateTimeField(blank=True, null=True, verbose_name='date updated')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccountingSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_of_financial_year', models.DateField()),
                ('default_accounting_period', models.PositiveSmallIntegerField(choices=[(0, 'Annually'), (1, 'Monthly'), (2, 'Weekly')], default=1)),
                ('equipment_capitalization_limit', models.DecimalField(decimal_places=2, default=0.0, max_digits=12)),
                ('is_configured', models.BooleanField(default=False)),
                ('service_hash', models.CharField(blank=True, default='', max_length=255)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Adjustment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('date_created', models.DateField(default=datetime.date.today)),
                ('reference_number', models.CharField(blank=True, max_length=100, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=128)),
                ('description', models.TextField(blank=True)),
                ('category', models.CharField(choices=[(0, 'Land'), (1, 'Buildings'), (2, 'Vehicles'), (3, 'LeaseHold Improvements'), (4, 'Furniture and Fixtures'), (5, 'Equipment')], max_length=128)),
                ('initial_value', models.DecimalField(decimal_places=2, max_digits=16)),
                ('depreciation_period', models.IntegerField()),
                ('init_date', models.DateField()),
                ('depreciation_method', models.IntegerField(choices=[(0, 'Straight Line'), (1, 'Sum of years digits'), (2, 'Double Declining balance')], default=0)),
                ('salvage_value', models.DecimalField(decimal_places=2, max_digits=16)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('category', models.CharField(choices=[(0, 'ADVERTISING'), (1, 'BANK SERVICE CHARGES'), (2, 'DUES AND SUBSCRIPTIONS'), (3, 'EQUIPMENT_RENTAL'), (4, 'TELEPHONE'), (5, 'VEHICLES'), (6, 'TRAVEL AND EXPENSES'), (7, 'SUPPLIES'), (8, 'SALARIES AND WAGES'), (9, 'RENT'), (10, 'PAYROLL TAXES'), (11, 'LEGAL AND ACCOUNTING'), (12, 'INSURANCE'), (13, 'OFFICE EXPENSES'), (14, 'CARRIAGE OUTWARDS'), (15, 'TRAINING'), (16, 'VENDOR SERVICES'), (17, 'OTHER')], max_length=500)),
                ('bill_frequency_type', models.CharField(choices=[('recurring', 'RECURRING'), ('once_off', 'ONCE-OFF')], max_length=500)),
                ('date', models.DateField()),
                ('reference', models.CharField(blank=True, max_length=255)),
                ('due', models.DateField()),
                ('memo', models.TextField(blank=True)),
                ('bill_number', models.CharField(default=None, max_length=255, null=True, unique=True)),
                ('payment_status', models.CharField(choices=[('pending', 'PENDING'), ('PartiallyPaid', 'PARTIALLY PAID'), ('Paid', 'FULLY PAID')], max_length=500)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BillLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BillPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('date', models.DateField()),
                ('method', models.CharField(choices=[('cash', 'Cash'), ('transfer', 'Transfer'), ('debit card', 'Debit Card'), ('mobile', 'Mobile-Transfer')], default='transfer', max_length=32)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('memo', models.TextField(blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Credit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('symbol', models.CharField(max_length=8)),
            ],
            options={
                'verbose_name': 'Currencie',
                'verbose_name_plural': 'Currencies',
            },
        ),
        migrations.CreateModel(
            name='Debit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InterestBearingAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('account_number', models.CharField(default=None, max_length=255, null=True, unique=True)),
                ('balance', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('type', models.CharField(choices=[('expense', 'Expense'), ('asset', 'Asset'), ('liability', 'Liability'), ('equity', 'Equity'), ('income', 'Income'), ('cost-of-sales', 'Cost of Sales')], max_length=32)),
                ('description', models.TextField()),
                ('bank_account', models.BooleanField(default=False)),
                ('control_account', models.BooleanField(default=False)),
                ('balance_sheet_category', models.CharField(choices=[('current-assets', 'Current Assets'), ('non-current-assets', 'Long Term Assets'), ('current-liabilites', 'Current Liabilites'), ('long-term-liabilites', 'Long Term Liabilites'), ('equity', 'Equity'), ('not-included', 'Not Included')], default='current-assets', max_length=32)),
                ('active', models.CharField(choices=[('active', 'ACTIVE'), ('inactive', 'INACTIVE')], default='inactive', max_length=123)),
                ('updated_date', models.DateTimeField(blank=True, null=True, verbose_name='date updated')),
                ('interest_rate', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('interest_interval', models.IntegerField(choices=[(0, 'monthly'), (1, 'annually')], default=1)),
                ('interest_method', models.IntegerField(choices=[(0, 'Simple'), (1, 'Complex')], default=0)),
                ('last_interest_earned_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField(default='')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='JournalEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('date', models.DateField(default=datetime.date.today)),
                ('draft', models.BooleanField(default=False)),
                ('memo', models.TextField()),
                ('posted_to_ledger', models.BooleanField(default=False)),
                ('adjusted', models.BooleanField(default=False)),
                ('reference_number', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Ledger',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Tax',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=64)),
                ('rate', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WorkBook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('reference_number', models.CharField(blank=True, max_length=100, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('reference_number', models.CharField(blank=True, max_length=100, null=True, unique=True)),
                ('credit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Credit')),
                ('debit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Debit')),
                ('entry', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry')),
                ('ledger', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Ledger')),
            ],
        ),
    ]

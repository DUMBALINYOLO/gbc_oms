# Generated by Django 3.0.7 on 2021-01-25 07:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=300)),
                ('targets', models.CharField(choices=[('individual', 'INDIVIDUAL'), ('all', 'ALL STUDENTS'), ('eights', 'GRADE 8'), ('nines', 'GRADE 9'), ('tens', 'GRADE 10'), ('elvens', 'GRADE 11'), ('twelves', 'GRADE 12'), ('other', 'OTHER')], max_length=200)),
                ('type', models.CharField(choices=[('once', 'ONCE-OFF'), ('often', 'OFTEN')], max_length=200)),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=16)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FeesConfig',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('default_invoice_comments', models.TextField(blank=True)),
                ('default_quotation_comments', models.TextField(blank=True)),
                ('default_terms', models.TextField(blank=True)),
                ('include_tax_in_invoice', models.BooleanField(default=True)),
                ('include_units_in_fees_invoice', models.BooleanField(default=True)),
                ('use_combined_invoice', models.BooleanField(default=True)),
                ('is_configured', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('sale_type', models.CharField(choices=[('credit', 'CREDIT'), ('cash', 'CASH'), ('quotation', 'Quotation')], max_length=16)),
                ('status', models.CharField(choices=[('quotation', 'Quotation'), ('invoice', 'Invoice'), ('canceled', 'Cancelled'), ('refunded', 'Refunded'), ('invoice', 'Invoice'), ('sale', 'Sale or Paid in Full'), ('paid-partially', 'Paid Partially')], max_length=16)),
                ('tracking_number', models.CharField(default=None, max_length=255, null=True)),
                ('draft', models.BooleanField(blank=True, default=False)),
                ('due', models.DateField(default=datetime.date.today)),
                ('date', models.DateField(default=datetime.date.today)),
                ('terms', models.CharField(blank=True, max_length=128)),
                ('comments', models.TextField(blank=True)),
                ('archived', models.BooleanField(default=False)),
                ('is_voided', models.BooleanField(blank=True, default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InvoiceLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('value', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('quantity', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('discount', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('amount', models.DecimalField(decimal_places=2, default=0, max_digits=16)),
                ('date', models.DateField(auto_now_add=True)),
                ('method', models.CharField(choices=[('cash', 'Cash'), ('transfer', 'Transfer'), ('debit card', 'Debit Card'), ('mobile', 'Mobile-Transfer')], default='transfer', max_length=32)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('comments', models.TextField(default='Thank you for your business')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='StudentReceipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('receipt_number', models.CharField(default=None, max_length=255, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('comment', models.CharField(blank=True, default='', max_length=511, null=True)),
                ('has_finished', models.BooleanField(db_index=True, default=False)),
                ('has_error', models.BooleanField(db_index=True, default=False)),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

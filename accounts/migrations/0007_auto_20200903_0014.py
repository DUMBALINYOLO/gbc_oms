# Generated by Django 3.0.7 on 2020-09-02 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20200902_2353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='category',
            field=models.CharField(choices=[(0, 'ADVERTISING'), (1, 'BANK SERVICE CHARGES'), (2, 'DUES AND SUBSCRIPTIONS'), (3, 'EQUIPMENT_RENTAL'), (4, 'TELEPHONE'), (5, 'VEHICLES'), (6, 'TRAVEL AND EXPENSES'), (7, 'SUPPLIES'), (8, 'SALARIES AND WAGES'), (9, 'RENT'), (10, 'PAYROLL TAXES'), (11, 'LEGAL AND ACCOUNTING'), (12, 'INSURANCE'), (13, 'OFFICE EXPENSES'), (14, 'CARRIAGE OUTWARDS'), (15, 'TRAINING'), (16, 'VENDOR SERVICES'), (17, 'OTHER')], max_length=500),
        ),
    ]

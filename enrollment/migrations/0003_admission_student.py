# Generated by Django 3.1.5 on 2021-02-01 08:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('people', '0001_initial'),
        ('enrollment', '0002_admission_klass'),
    ]

    operations = [
        migrations.AddField(
            model_name='admission',
            name='student',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='application', to='people.studentprofile'),
        ),
    ]

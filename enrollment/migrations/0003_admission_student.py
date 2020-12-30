# Generated by Django 3.1.4 on 2020-12-27 06:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('enrollment', '0002_admission_klass'),
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='admission',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='people.student'),
        ),
    ]
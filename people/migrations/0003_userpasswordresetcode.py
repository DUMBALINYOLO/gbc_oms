# Generated by Django 3.2.4 on 2021-08-21 21:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0002_auto_20210820_1231'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserPasswordResetCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reset_code', models.CharField(max_length=351, unique=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='resetter', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
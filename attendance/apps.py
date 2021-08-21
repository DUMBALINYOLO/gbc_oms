from django.apps import AppConfig


class AttendanceConfig(AppConfig):
    name = 'attendance'
    default_auto_field = 'django.db.models.BigAutoField'

    # def ready(self):
    	# import attendance.signals

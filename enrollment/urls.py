from rest_framework.routers import DefaultRouter
from .apis import (
			PendingAdminApplicationViewSet,
			RejectedAdminAdmissionViewSet,
			CallForAdminAdmissionViewSet,
			AcceptedAdminAdmissionViewSet,
			StudentAdmissionViewSet
	)





router = DefaultRouter()

router.register(r'student-admissions', StudentAdmissionViewSet, basename='student-admissions')
router.register(r'pending-student-admissions', PendingAdminApplicationViewSet, basename='pending-student-admissions')
router.register(r'rejected-student-admissions', RejectedAdminAdmissionViewSet, basename='rejected-student-admissions')
router.register(r'meeting-student-admissions', CallForAdminAdmissionViewSet, basename='meeting-student-admissions')
router.register(r'accepted-student-admissions', AcceptedAdminAdmissionViewSet, basename='accepted-student-admissions')


urlpatterns = router.urls

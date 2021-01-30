from rest_framework.routers import DefaultRouter
from .apis import (
			AdminGeneralGradeTestViewSet,
			AdminGeneralGradeExcerciseViewSet,
			AdminGeneralGradeAssignmentViewSet,
			StudentTestViewSet,
			StudentExcerciseViewSet,
			StudentAsignmentViewSet,
			TeacherGeneralGradeTestViewSet,
			TeacherGeneralGradeExcerciseViewSet,
			TeacherGeneralGradeAssignmentViewSet,
			AsignmentRecordViewSet,
			TestRecordViewSet,
			ExcerciseRecordViewSet,

		)

router = DefaultRouter()

router.register(r'admin-student-tests', AdminGeneralGradeTestViewSet, basename='admin-student-tests')
router.register(r'admin-student-assignments', AdminGeneralGradeAssignmentViewSet, basename='admin-student-assignments')
router.register(r'admin-student-excercises', AdminGeneralGradeExcerciseViewSet, basename='admin-student-excercises')
router.register(r'grading-asignment-records', AsignmentRecordViewSet, basename='grading-asignment-records')
router.register(r'grading-test-records', TestRecordViewSet, basename='grading-test-records')
router.register(r'grading-excercise-records', ExcerciseRecordViewSet, basename='grading-excercise-records')
router.register(r'teacher-student-tests', TeacherGeneralGradeTestViewSet, basename='teacher-student-tests')
router.register(r'teacher-student-excercises', TeacherGeneralGradeExcerciseViewSet, basename='teacher-student-tests')
router.register(r'teacher-student-assignments', TeacherGeneralGradeAssignmentViewSet, basename='teacher-student-assignments')

router.register(r'student-tests', StudentTestViewSet, basename='student-tests')
router.register(r'student-assignments', StudentAsignmentViewSet, basename='student-assignments')
router.register(r'student-excercises', StudentExcerciseViewSet, basename='student-excercises')



urlpatterns = router.urls














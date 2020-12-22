from rest_framework import viewsets, generics, status, views
from rest_framework.response import Response

from .constants import (
		STUDY_MODE_CHOICES,
		SCHOOL_NOTICE_TYPE_CHOICES,
		SCHOOL_NOTICE_BOARD_STATUS_CHOICES,
		INSTITUTION_STATUS_CHOICES,
		INSTITUTION_TYPE_CHOICES,
		PYSCHOMOTOR_CHOICES,
		TERM_CHOICES,
		STATUS_CHOICES,
		SCHOOL_HEAD_REPORT_CARDS,
		ONLINE_ADMISSION_STATUS_CHOICES,
		ATTENDANCE_STATUS_CHOICES,
		COURSES_STATUS_CHOICES,
		STUDY_NOTES_STATUS_CHOICES,
		STUDY_NOTES_APPROVAL_STATUS_CHOICES,
		USER_TYPE_CHOICES,
		USER_TITLE_CHOICES,
		GENDER_CHOICES,
		USER_STATUS_CHOICES,
		YEAR_CHOICES,
		STUDENT_CLASS_STATUS_CHOICES,
		BOOLEAN_CHOICES,
		LANGUAGE_CHOICES,
		COURSES_FORMAT_CHOICES,
		NUMBER_OF_SECTIONS_CHOICES,
		COURSE_HIDDEN_CHOICES,
		COURSE_LAYOUT_CHOICES,
		NUMBER_OF_ANNOUNCEMENTS_CHOICES,
		FILES_UPLOAD_CHOICES,
		COURSE_GROUPS_CHOICES,
		COURSE_VISIBILITY_CHOICES,
		COURSE_RATING_CHOICES,
		COURSE_GRADING_TYPE_CHOICES,
		GENERAL_GRADING_TYPE_CHOICES,

	)


class GeneralGradingTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(GENERAL_GRADING_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CourseGradingTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_GRADING_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class CourseRatingChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_RATING_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class CourseLayoutChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_LAYOUT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)





class CourseGroupsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSE_GROUPS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class FilesUploadsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(FILES_UPLOAD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


# class NumberOfAnnouncementsChoicesAPIView(views.APIView):


# 	def get(self, request, format=None):

# 		my_choices = []
# 		choice_dict = dict(NUMBER_OF_ANNOUNCEMENTS_CHOICES)
# 		for key, value in choice_dict.items():

# 			itered_dict = {"key": key, "value": value}
# 			my_choices.append(itered_dict)
# 		return Response(my_choices, status=status.HTTP_200_OK)


class NumberOfAnnouncementsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(NUMBER_OF_ANNOUNCEMENTS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class CourseFormatChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSES_FORMAT_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class LanguageChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(LANGUAGE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class BooleanChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BOOLEAN_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class StudentClassStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDENT_CLASS_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class UserStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class YearChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(YEAR_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class UserTitleChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_TITLE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class GenderChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(GENDER_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StudyNotesApprovalStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_NOTES_APPROVAL_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StaffTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(USER_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)

class StudyNotesStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_NOTES_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class CoursesStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(COURSES_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class AttendanceStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ATTENDANCE_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class OnlineAdmissionStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ONLINE_ADMISSION_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolHeadReportStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_HEAD_REPORT_CARDS)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class TermChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(TERM_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class PsychomotorChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PYSCHOMOTOR_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InstitutionTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INSTITUTION_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InstitutionStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INSTITUTION_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolNoticeBoardStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_NOTICE_BOARD_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class SchoolNoticeTypeChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(SCHOOL_NOTICE_TYPE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class StudyChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(STUDY_MODE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



		

























































































































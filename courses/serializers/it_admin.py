from rest_framework import serializers
from courses.models import (
			Text,
			File,
			Image,
			Video,
			StudyNote,
			AddTextToNote,
			AddImageToNote,
			AddFileToNote,
			AddVideoToNote,
			AddBibliography,
			Course,
			TopicObjective,
			AddTopicObjective,
			TopicGuideLine,
			AddTopicGuideline,
			Topic,
			SubTopic,
			Review,
			StudentCourseEnrollment,
			AddCourseToSchool,
			Author,
			PublisherCity,
			Publisher,
			ReferrenceSource,

		)
from setup.models import Institution
from people.models import Student



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value



class ItReferenceSourceCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = ReferrenceSource
		fields = [
				'title',
				'author',
				'publisher',
				'date_published',

			]


class ItReferenceSourceListDetailSerializer(serializers.ModelSerializer):
	publisher = StringSerializer()

	class Meta:
		model = ReferrenceSource
		fields = [
				'id',
				'title',
				'author',
				'publisher',
				'date_published',

			]



class ItCreateUpdateAuthorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Author
		fields = [
				'name'
			]


class ItListAuthorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Author
		fields = [
				'id',
				'author_number'
				'name'
			]


class ItListAuthorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Author
		fields = [
				'id',
				'author_number'
				'name',
			]


class ItDetailAuthorSerializer(serializers.ModelSerializer):
	publications = ItReferenceSourceListDetailSerializer(many=True)

	class Meta:
		model = Author
		fields = [
				'id',
				'author_number'
				'name',
				'publications',
			]



class ItPublisherCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Publisher
		fields = [
			'name',
			'city'
		]


class ItPublisherListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Publisher
		fields = [
			'id',
			'number',
			'name',
			'city',

		]



class ItPublisherDetailSerializer(serializers.ModelSerializer):
	refferences = ItReferenceSourceListDetailSerializer(many=True)

	class Meta:
		model = Publisher
		fields = [
			'id',
			'number',
			'name',
			'city',
			'refferences',
		]



class ItPublisherCityCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = PublisherCity
		fields = [
			'name'
		]


class ItPublisherCityListSerializer(serializers.ModelSerializer):

	class Meta:
		model = PublisherCity
		fields = [
			'id',
			'name',
			'number',
		]


class ItPublisherCityDetailSerializer(serializers.ModelSerializer):
	publishers = ItPublisherListSerializer(many=True)

	class Meta:
		model = PublisherCity
		fields = [
			'id',
			'name',
			'number',
			'publishers',
		]




class ItTextCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Text
		fields = [
				'title',
				'content',
			]



class ItTextListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Text
		fields = [
				'id',
				'title',
				'content',
				'created',
				'updated'
			]



class ItFileCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = File
		fields = [
				'title',
				'file',
			]



class ItFileListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = File
		fields = [
				'id',
				'title',
				'file',
				'created',
				'updated'
			]


class ItImageCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Image
		fields = [
				'title',
				'file',
			]



class ItImageListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Image
		fields = [
				'id',
				'title',
				'file',
				'created',
				'updated'
			]



class ItVideoCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Video
		fields = [
				'title',
				'url',
			]



class ItVideoListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Video
		fields = [
				'id',
				'title',
				'url',
				'created',
				'updated'
			]




class ItStudyNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
				'title',
				'topic',
				'status',
				'approval_status',
				'note',
			]


class ItStudyNoteListSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
			'id',
			'title',
			'topic',
			'status',
			'approval_status',

			]


class ItStudyNoteDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
			'id',
			'title',
			'topic',
			'status',
			'approval_status',
		]



class ItAddTextToNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTextToNote
		fields = [
			'note',
			'text',
		]


class ItAddedTextToNoteListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTextToNote
		fields = [
			'id',
			'note',
			'text',
			'timestamp',
		]


class ItAddVideoToNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddVideoToNote
		fields = [
			'note',
			'text',
		]


class ItAddedVideoToNoteListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddVideoToNote
		fields = [
			'id',
			'note',
			'video',
			'timestamp',
		]


class ItAddFileToNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddFileToNote
		fields = [
			'note',
			'file',
		]


class ItAddedFileToNoteListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddFileToNote
		fields = [
			'id',
			'note',
			'video',
			'timestamp',
		]

class ItAddImageToNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddImageToNote
		fields = [
			'note',
			'file',
		]


class ItAddedFileToNoteListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddImageToNote
		fields = [
			'id',
			'note',
			'image',
			'timestamp',
		]


class ItAddBibliographyToNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddBibliography
		fields = [
			'note',
			'reference',
		]


class ItAddedFileToNoteListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddBibliography
		fields = [
			'id',
			'note',
			'reference',
			'timestamp',
		]


class ItTopicObjectiveCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicObjective
		fields = [
			'name',
			'description',
		]


class ItTopicObjectiveListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicObjective
		fields = [
			'id',
			'name',
			'description',
		]



class ItTopicGuidelineCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicGuideLine
		fields = [
			'name',
			'description',
		]


class ItTopicGuidelineListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicGuideLine
		fields = [
			'id',
			'name',
			'description',

		]



class ItAddTopicObjectiveCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTopicObjective
		fields = [
			'objective',
			'topic',
		]


class ItAddTopicObjectiveListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTopicObjective
		fields = [
			'id',
			'objective',
			'topic',
			'timestamp',
		]


class ItAddTopicObjectiveCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTopicGuideline
		fields = [
			'guideline',
			'topic',
		]


class ItAddTopicGuidelineListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = AddTopicGuideline
		fields = [
			'id',
			'guideline',
			'topic',
			'timestamp',
		]


class ItReviewListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Review
		fields = [
			'id',
			'course',
			'pub_date',
			'comment',
			'rating',

		]


class ItSubTopicCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = SubTopic
		fields =[
			'title',
			'topic',
		]


class ItSubTopicListSerializer(serializers.ModelSerializer):
	topic = StringSerializer()

	class Meta:
		model = SubTopic
		fields =[
			'id',
			'title',
			'topic',
		]


class ItSubTopicDetailSerializer(serializers.ModelSerializer):
	topic = StringSerializer()
	notes = ItStudyNoteDetailSerializer(many=True)

	class Meta:
		model = SubTopic
		fields =[
			'id',
			'title',
			'topic',
			'notes',
		]



class ItTopicCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Topic
		fields = [
			'title',
			'course',
			'content_overview',
			'assessment_overview',
		]



class ItTopicListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Topic
		fields = [
			'id',
			'title',
			'course',
		]






class ItTopicDetailSerializer(serializers.ModelSerializer):
	subtopics = ItSubTopicDetailSerializer(many=True)


	class Meta:
		model = Topic
		fields = [
			'id',
			'title',
			'course',
			'content_overview',
			'assessment_overview',
			'objectives',
			'guidelines',
			'subtopics',

		]


class ItCourseCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = [
			'full_name',
			'short_name',
			'stream',
			'course_visibility',
			'status',
			'overview',
			'start_date',
			'end_date',
			'description',


		]



class ItCourseListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = [
			'id',
			'full_name',
			'short_name',
			'stream',
			'status',
			'course_visibility'

		]



class ItStudentSerializer(serializers.ModelSerializer):
	school = StringSerializer()

	class Meta:
		model = Student
		fields = [
			'id',
			'school',
			# 'klass',
			'first_name',
			'last_name'
		]


class ItOwnersSerializer(serializers.ModelSerializer):
	type = serializers.SerializerMethodField()
	status = serializers.SerializerMethodField()

	class Meta:
		model = Institution
		fields = [
			'id',
			'name',
			'type',
			'status'
		]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_type(self, obj):
		return obj.get_type_display()



class ItCourseDetailSerializer(serializers.ModelSerializer):
	students = ItStudentSerializer(many=True)
	owners = ItOwnersSerializer(many=True)
	reviews = ItReviewListDetailSerializer(many=True)
	notes = ItTextListDetailSerializer(many=True)
	references = ItReferenceSourceListDetailSerializer(many=True)
	videos = ItVideoListDetailSerializer(many=True)
	files = ItFileListDetailSerializer(many=True)
	images =ItImageListDetailSerializer(many=True)
	status = serializers.SerializerMethodField()
	stream = serializers.SerializerMethodField()
	course_visibility = serializers.SerializerMethodField()

	class Meta:
		model = Course
		fields = [
			'id',
			'full_name',
			'short_name',
			'stream',
			'course_visibility',
			'status',
			'overview',
			'start_date',
			'end_date',
			'course_number',
			'description',
			'students',
			'owners',
			'reviews',
			'images',
			'videos',
			'notes',
			'references',
			'files',

		]
 

	def get_stream(self, obj):
		return obj.get_stream_display()

	def get_status(self, obj):
		return obj.get_status_display()


	def get_course_visibility(self, obj):
		return obj.get_course_visibility_display()






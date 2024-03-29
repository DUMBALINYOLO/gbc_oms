

import os
import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEBUG = True
if DEBUG:
    from dotenv import load_dotenv
    load_dotenv()


SECRET_KEY = 'k$i=2jy+1s5t(+^3_me23xvqr!6e03p53rvg8t+$v9(s&6))5q'




ALLOWED_HOSTS = ['*']



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'accounts',
    'basedata',
    'attendance',
    'courses',
    'curriculum',
    'enrollment',
    'event',
    # 'fees',
    'grading',
    'inventory',
    'setup',
    'noticeboard',
    'people.apps.PeopleConfig',
    'klasses',
    'communication',
    'reports',
    'ads',
    'messaging',
    'tickets',
    'logs',
    'notifications',
    'newsletter',
    #third part apps
    'django_extensions',
    'solo.apps.SoloAppConfig',
    'rest_framework',
    'corsheaders',
    # 'channels',
    'django_celery_beat',
    'knox',
    'psycopg2',
    # 'allauth',
    # 'allauth.account',
    # 'rest_auth.registration',



]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.BrokenLinkEmailsMiddleware',
]

ROOT_URLCONF = 'gbc.urls'
AUTH_USER_MODEL = 'people.User'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'frontend')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'gbc.wsgi.application'
# ASGI_APPLICATION = "gbc.routing.application"


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases




DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'your database name',
        'USER': 'postgres',
        'PASSWORD': 'your password',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),

    'DATE_INPUT_FORMATS': ['iso-8601', '%Y-%m-%dT%H:%M:%S.%fZ'],
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ),

}
#
# SIMPLE_JWT = {
#     'ACCESS_TOKEN_LIFETIME': timedelta(minutes=15),
#     'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
#     'ROTATE_REFRESH_TOKENS': True,
# }


REST_USE_JWT = True

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
STATICFILES_DIRS = [
    # BASE_DIR / "static",
    os.path.join(BASE_DIR, "frontend", 'build', "static"),
]

# CORS_ALLOWED_ORIGINS = [
#     'http://localhost:3000',
#     'http://127.0.0.1:3000',
# ]

# CORS_ORIGINS_ALLOW_ALL  = True
CORS_ORIGIN_ALLOW_ALL = True


CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'Authorization',
    'content-type',
    'Referer',
    'origin',
    'user-agent',
    'sec-ch-ua',
    'User-Agent',
    "remote-user",

]




SERVER_EMAIL = 'youremail@gmail.com'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = SERVER_EMAIL
EMAIL_HOST_PASSWORD = 'yourapppassword'
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER





ADMINS = [

]


MANAGERS = ADMINS




os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
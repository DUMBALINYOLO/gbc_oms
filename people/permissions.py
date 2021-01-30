from rest_framework.permissions import BasePermission, SAFE_METHODS
from .user_groups import (
    PRINCIPAL,
    TEACHER,
    BURSAR,
    STUDENT,
    PARENT,
    CLERK
)


class GeneralPermission(BasePermission):

    """
    Permission to allow readonly requests 
    to non client users, or access to non 
    put requests to staff users.
    """

    def has_permission(self, request, view):
        is_authenticated = request.user.is_authenticated
        principal_permissions = (
            request.user.type in PRINCIPAL) and (request.method in SAFE_METHODS)
        bursar_permissions = (
            request.user.type in BURSAR) and (request.method in SAFE_METHODS)
        teacher_permissions = (
            request.user.type in TEACHER) and (request.method in SAFE_METHODS)
        student_permissions = (
            request.user.type in STUDENT) and (request.method in SAFE_METHODS)
        parent_permissions = (
            request.user.type in PARENT) and (request.method in SAFE_METHODS)
        clerk_permissions = (
            request.user.type in CLERK) and (request.method in SAFE_METHODS)
        
        return is_authenticated and (
                                        principal_permissions or 
                                        bursar_permissions or 
                                        teacher_permissions or
                                        student_permissions or
                                        parent_permissions or
                                        clerk_permissions
                                    )


class IsPrincipal(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in PRINCIPAL


class IsBursar(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in BURSAR


class IsTeacher(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in TEACHER


class IsStudent(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in STUDENT


class IsParent(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in PARENT


class IsClerk(BasePermission):

    """
    allow access to admins only.
    """

    def has_permission(self, request, view):
        return request.user.type in CLERK


class IsUpdateMethod(BasePermission):

    """
    Allow only PUT methods.
    """

    def has_permission(self, request, view):
        return request.method == "PUT"


class HasUserPermissions(BasePermission):

    """
    Allow only GET and Patch methods.
    """

    def has_permission(self, request, view):
        is_authenticated = request.user.is_authenticated
        allowed_methdods = request.method in {"PATCH", "GET"}
        return is_authenticated and allowed_methdods


class IsGetRequest(BasePermission):

    """
    allow access to Report endpoint.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.method == 'GET') and request.user.is_active
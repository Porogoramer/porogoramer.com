from rest_framework.exceptions import APIException

class BadRequestException(APIException):
    def __init__(self, status_code, message, error):
        self.status_code = status_code
        self.detail = message
        self.code = error
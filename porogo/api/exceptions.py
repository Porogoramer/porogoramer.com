"""Generic exceptions to raise from different views"""
from rest_framework.exceptions import APIException

class APIRequestException(APIException):
    """
        Generic exception to be raised by different views

        Attributes:
            status_code (int): HTTP Status code
            message (str): Message to send as the 'detail' part of the json
            code (str): HTTP Error type (e.g. bad_request)
    """

    def __init__(self, status_code, message, error):
        super().__init__()
        self.status_code = status_code
        self.detail = message
        self.code = error
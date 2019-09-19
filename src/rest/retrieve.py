"""
Copyright 2019 Dragos Cirjan <dragos.cirjan@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

import abc


class Retrieve:
    """
    Interface for implementing REST Retreive (FetchOne) method.
    :see https://en.wikipedia.org/wiki/Representational_state_transfer
    """

    @abc.abstractmethod
    def retrieve(self, id, fields: list = [], options: dict = {}) -> dict:
        """
        Retrieve resource from the database based on its ID and on a set of fields to be returned.
    
        retrieve(10) # will return entire resource

        or

        retrieve(
            10,
            [ 'id', 'name', 'email' ]
        ) # will return only the fields mentioned from a resource

        :param id: int|str      ID of the resource to retreive
        :param fields: list     fields to obtain (can be empty - will return all fields)
        :param options: dict    TODO: Not used, to be defined
        :return: dict           resource data
        """
        pass

class RetrieveQuery:
    """
    Interface for implementing REST Retrieve query.
    """

    @abc.abstractmethod
    def retrieve(self, id, fields: list = [], options: dict = {}) -> str:
        """
        Generate string query for `Retrieve.retrieve` method.

        :see Retrieve.retrieve
        :param id: int|str      ID of the resource to retreive
        :param fields: list     fields to obtain (can be empty - will return all fields)
        :param options: dict    TODO: Not used, to be defined
        :return: str
        """
        pass

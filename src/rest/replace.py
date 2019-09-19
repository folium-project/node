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


class Replace:
    """
    Interface for implementing REST Replace method.
    :see https://en.wikipedia.org/wiki/Representational_state_transfer
    """

    @abc.abstractmethod
    def replace(self, items, options: dict = {}) -> list:
        """
        Replace a resource or set of resources in the database.
        If a resource does not exists when passed to the update method, it will be created.
        
        replace([
          { "text": "I really have to iron", "id": 10 }, # this item will be replaced
          { "text": "Do laundry" } # this item will be created
        ])

        :param items: dict|list     can be a single element or an array of elements
        :param options: dict        TODO: Not used, to be defined
        :return: list               will return the ids of the elements updated
        """
        pass

class ReplaceQuery:
    """
    Interface for implementing REST Replace query.
    """

    @abc.abstractmethod
    def replace(self, items, options: dict = {}) -> str:
        """
        Generate string query for `Replace.replace` method.

        :see Replace.replace
        :param items: dict|list     can be a single element or an array of elements
        :param options: dict        TODO: Not used, to be defined
        :return: str
        """
        pass

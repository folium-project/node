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


class Update:
    """
    Interface for implementing REST Update (Patch) method.
    :see https://en.wikipedia.org/wiki/Representational_state_transfer
    """

    @abc.abstractmethod
    def update(self, id, items, options: dict = {}) -> dict:
        """
        Update/patch a resource in the database.
        If multiple items are given, all patches will be applied in the given order.

        update(id, { "text": "I really have to iron" })

        :param id: int|str          id of item to be patched
        :param items: dict|list     can be a single element or an array of elements
        :param options: dict        TODO: Not used, to be defined
        :return: dict               resource data
        """
        pass


class UpdateQuery:
    """
    Interface for implementing REST Update query.
    """

    @abc.abstractmethod
    def update(self, id, items, options: dict = {}) -> str:
        """
        Generate string query for `Update.update` method.

        :see Update.update
        :param id: int|str          id of item to be patched
        :param items: dict|list     can be a single element or an array of elements
        :param options: dict        TODO: Not used, to be defined
        :return: str
        """
        pass

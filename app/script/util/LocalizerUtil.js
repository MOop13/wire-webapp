/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.util = z.util || {};

z.util.LocalizerUtil = {
  join_names: function(user_ets, declension = z.string.Declension.ACCUSATIVE) {
    const first_names = user_ets.map((user_et) => z.util.get_first_name(user_et, declension));
    const names_string = first_names.join(', ');
    return names_string.replace(/,(?=[^,]*$)/, ` ${z.l10n.text(z.string.and)}`);
  },
};

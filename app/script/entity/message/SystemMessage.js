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
window.z.entity = z.entity || {};

z.entity.SystemMessage = class SystemMessage extends z.entity.Message {
  constructor() {
    super();
    this.super_type = z.message.SuperType.SYSTEM;
    this.system_message_type = z.message.SystemMessageType.NORMAL;
  }

  is_conversation_rename() {
    return this.system_message_type === z.message.SystemMessageType.CONVERSATION_RENAME;
  }
};

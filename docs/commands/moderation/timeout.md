# /timeout

This command is used to temporarly restrict the access of the user the server. The user will have read-only permission to channels.

This command is similar to the [ban](ban) command, but the user will still be able to see channels with a read-only permission.

:::note
This command is also usable with `/mute`
:::

### Command Usage {#usage}

The timeout command needs the target user and a reason message. This message will be sent to the user to indicate their timeout.

A time period can also be indicated. If not included, the timeout will be active until manual removal.

:::note
See the [untimeout](untimeout) command for manually removing users from the timeout list.
:::

| command       | target user | reason           | time (optionnal)   |
| ------------- | ----------- | ---------------- | ------------------ |
| `/timeout`    | `@username` | `reason message` | `YYYY-MM-DD HH:MM` |

:::warning
The moderation module needs to be setup before using this command. Type `/setup moderation` and follow the bot instructions. Visit the [setup](../administration/setup) command page to learn more.
:::

### Command Result {#result}

The bot will confirm the operation by muting the target user and send a message to the user via DMs to indicate the timeout including the reason message.

The user will automatically be removed from the list once the time period is reached (if specified).
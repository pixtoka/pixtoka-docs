# /ban

This command is used to restrict the access of the user to the server. The user will not be able to access channels.

This command is similar to the [timeout](timeout) command, but the user will not be able to see the (selected) channels.

### Command Usage {#usage}

The ban command needs the target user and a reason message. This message will be sent to the user to indicate their ban.

A time period can also be indicated. If not included, the ban will be active until manual removal.

:::note
See the [unban](unban) command for manually removing users from the ban list.
:::

| command       | target user | reason           | time (optionnal)   |
| ------------- | ----------- | ---------------- | ------------------ |
| `/ban`        | `@username` | `reason message` | `YYYY-MM-DD HH:MM` |

:::warning
The moderation module needs to be setup before using this command. Type `/setup moderation` and follow the bot instructions. Visit the [setup](../administration/setup) command page to learn more.
:::

### Command Result {#result}

The bot will confirm the operation by banning the target user and send a message to the user via DMs to indicate the ban including the reason message.

The user will automatically be removed from the list once the time period is reached (if specified).
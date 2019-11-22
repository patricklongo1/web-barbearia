import React from 'react';
import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationsList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#7159c1" size={25} />
            </Badge>

            <NotificationsList>
                <Scroll>
                    <Notification unread>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>Você tem um novo agendamento de serviço</p>
                        <time>a 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                </Scroll>
            </NotificationsList>
        </Container>
    );
}

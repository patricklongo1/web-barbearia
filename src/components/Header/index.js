import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo2.svg';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="gobarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />

                    <Profile>
                        <div>
                            <strong>Patrick Longo</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Patrick Longo"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

import React, { useEffect, useState } from 'react';
import "./MainContainer.scss";
import useUser from '../../hooks/useUser';
import useFollow from '../../hooks/useFollow';
import useRepository from '../../hooks/useRepository';
import SearchBox from '../../components/SearchBox/SearchBox';
import RepositoryList from '../../components/RepositoryList/RepositoryList';
import Follower from '../../components/Modal/Follower/Follower';
import useProject from '../../hooks/useProject';
import { Container, Header, Search, Wrap, Content, Info } from "../../styles/MainContainer";
import { AvatarImage } from "../../styles/common/AvatarImage";
import { Badge } from "../../styles/common/Badge";
import { ModalButton } from "../../styles/common/ModalButton";
import { TabUl, TabLi } from "../../styles/common/Tab";

function MainContainer() {
    const tabs = ["Repositories", "Projects", "Packages"];

    const { user, getUserData } = useUser();
    const { repository, getRepositoryData } = useRepository();
    const { project, getProjectData } = useProject();
    const { follower, getFollowerData } = useFollow();

    const [name, setName] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);
    const [followerModal, setFollowerModal] = useState(false);

    useEffect(() => {
        if (user.login !== "" && user.name !== "") {
            document.title = user.login + (user.name !== null ? " (" + user.name + ")" : "");
            getRepositoryData(user.login);
            getProjectData(user.login.toLowerCase(), user.type === "User" ? "users" : "orgs");
        }
    }, [user, getRepositoryData, getProjectData]);

    const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            getUserData(name);
            setSelectedTab(0);
        }
    }

    const TabItem = () => {
        switch (selectedTab) {
            default: case 0:
                return repository.length > 0 ? <RepositoryList repositories={repository} /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any repositories yet.</p>;
            case 1:
                return project.length > 0 ? <div className="projects yes" /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any projects yet.</p>;
            case 2:
                return false ? <div className="packages yes" /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any packages yet.</p>;
        }
    }

    const handleFollowerModal = () => {
        getFollowerData(name);
        setFollowerModal(!followerModal);
    }

    return (
        <Container>
            <Header>
                <Search>
                    <SearchBox value={name} placeholder={"Search username"} onChange={e => setName(e.currentTarget.value)} onKeyUp={e => search(e)} />
                </Search>
            </Header>
            <Wrap>
                <Content style={{ display: user.avatar_url === "" ? "none" : "block" }}>
                    <Info>
                        <div style={{ paddingRight: "30px", width: "17%" }}>
                            <AvatarImage src={user.avatar_url} />
                        </div>
                        <div style={{ width: "83%" }}>
                            <div style={{ display: "inline-flex", verticalAlign: "middle" }}>
                                <p style={{ fontSize: "40px" }}>{user.name === null ? user.login : user.name}</p>
                                <Badge color={"#383e49"}>{user.type}</Badge>
                            </div>
                            <p>{user.login}</p>
                            <div style={{ marginTop: "5px", width: "160px", display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                                <ModalButton onClick={() => handleFollowerModal()}>{user.followers} followers</ModalButton>
                                <span style={{ width: "auto" }}>●</span>
                                <ModalButton>{user.following} following</ModalButton>
                            </div>
                            <div style={{ display: user.company === "" ? "none" : "block" }}>
                                <p>{user.company}</p>
                            </div>
                            <div style={{ display: user.bio !== null ? "block" : "none" }}>
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </Info>
                    <div style={{ padding: "60px 0 20px" }}>
                        <TabUl>
                            {tabs.map((item: string, key: number) => {
                                return (
                                    <TabLi key={key} style={{ borderBottom: selectedTab === key ? "2px solid #fff" : "" }} onClick={() => setSelectedTab(key)}>
                                        <span style={{color: "#fff", fontSize: "18px"}}>{item}</span>
                                    </TabLi>
                                );
                            })}
                        </TabUl>
                    </div>
                    <TabItem />
                </Content>
            </Wrap>
            <Follower show={followerModal} followers={follower} onClose={() => setFollowerModal(false)} />
        </Container>
    )
}

export default MainContainer;
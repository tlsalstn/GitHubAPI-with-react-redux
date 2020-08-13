import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import "./MainContainer.scss";
import SearchBox from '../../components/SearchBox/SearchBox';
import useUser from '../../hooks/useUser';
import StoneCard from '../../components/StoneCard/StoneCard';
import useRepository from '../../hooks/useRepository';
import RepositoryList from '../../components/RepositoryList/RepositoryList';

function WeatherContainer() {
    const tabs = ["Repositories", "Projects", "Packages"];
    const { user, getUserData } = useUser();
    const { repository, getRepositoryData } = useRepository();
    const [name, setName]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [selectedTab, setSelectedTab]: [number, Dispatch<SetStateAction<number>>] = useState(0);

    useEffect(() => {
        if (user.login !== "" && user.name !== "") document.title = user.login + " (" + user.name + ")";
    }, [user]);

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            getUserData(name);
            getRepositoryData(name);
        }
    }

    const TabItem = () => {
        switch (selectedTab) {
            default: case 0:
                return repository.length > 0 ? <RepositoryList repositories={repository} /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any repositories yet.</p>;
            case 1:
                return false ? <div className="projects yes" /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any projects yet.</p>;
            case 2:
                return false ? <div className="packages yes" /> : <p style={{ width: "100%", color: "#fff", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>You don't have any packages yet.</p>;
        }
    }

    return (
        <div className="MainContainer">
            <header className="MainContainer-Header">
                <SearchBox className="MainContainer-Header-Search" value={name} onChange={e => setName(e.currentTarget.value)} onKeyUp={e => search(e)} />
            </header>
            <div className="MainContainer-Wrap">
                <div className="MainContainer-Wrap-Content" style={{ display: user.avatar_url === "" ? "none" : "block" }}>
                    <div className="MainContainer-Wrap-Content-Info">
                        <div className="MainContainer-Wrap-Content-Info-Avatar">
                            <img src={user.avatar_url} alt={"avatar"} />
                        </div>
                        <div className="MainContainer-Wrap-Content-Info-Private">
                            <div className="MainContainer-Wrap-Content-Info-Private-Name">
                                <p>{user.name === null ? user.login : user.name}</p>
                                <StoneCard type={user.type} />
                            </div>
                            <div className="MainContainer-Wrap-Content-Info-Private-Login">
                                <p>{user.login}</p>
                            </div>
                            <div className="MainContainer-Wrap-Content-Info-Private-Follow">
                                <a href={user.followers_url}>{user.followers} followers</a>
                                <span>●</span>
                                <a href={user.following_url}>{user.following} following</a>
                            </div>
                            <div className="MainContainer-Wrap-Content-Info-Private-Company" style={{ display: user.company === "" ? "none" : "block" }}>
                                <p>{user.company}</p>
                            </div>
                            <div className="MainContainer-Wrap-Content-Info-Private-Bio" style={{ display: user.bio !== null ? "block" : "none" }}>
                                <p>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="MainContainer-Wrap-Content-Menu">
                        <div className="MainContainer-Wrap-Content-Menu-Tabs">
                            <ul>
                                {tabs.map((item: string, key: number) => {
                                    return (
                                        <li style={{ borderBottom: selectedTab === key ? "2px solid #fff" : "" }} onClick={() => setSelectedTab(key)}>
                                            <span>{item}</span>
                                        </li> 
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="MainContainer-Wrap-Content-Repository">
                        <TabItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherContainer;
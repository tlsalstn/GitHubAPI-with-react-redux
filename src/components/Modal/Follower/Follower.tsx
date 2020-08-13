import React from "react";
import "./Follower.scss";
import { FollowerState } from "../../../modules/follow";
import { Modal } from "../../../styles/common/Modal";
import { AvatarImage } from "../../../styles/common/AvatarImage";

type Props = {
    show: boolean;
    followers: FollowerState[];
    onClose: () => void;
}

function Follower({ show, followers, onClose }: Props) {
    if(!show) return null;
    return (
        <div className=".Modal">
            <Modal width={"400"} height={"500"}>
                <div className="Follower-Wrap-Title">
                    <p>Followers</p>
                </div>
                <hr/>
                <div className="Follower-Wrap-List">
                    {followers.length > 0 ? followers.map((item: FollowerState, key: number) => {
                        return (
                            <div key={key} className="Follower-Wrap-List-Content">
                                <div className="vhdl">
                                    <AvatarImage src={item.avatar_url} />
                                </div>
                                <span>{item.login}</span>
                            </div>
                        );
                    }) : <p>No followers</p>}
                </div>
                <div className="Follower-Wrap-Exit">
                    <button onClick={onClose}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default Follower;
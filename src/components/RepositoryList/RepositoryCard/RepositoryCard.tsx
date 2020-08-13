import React from 'react';
import { RepositoryState } from "../../../modules/repository";
import { Repository, Detail, Title, SubTitle } from "../../../styles/Card";

type Props = {
    repository: RepositoryState;
}

function RepositoryCard({ repository }: Props) {
    const sec = 1000; // 초
    const min = sec * 60;   // 분
    const hour = min * 60;  // 시
    const day = hour * 24;  // 일
    const month = day * 30; // 월
    const year = month * 12;    // 년

    const pushed_at = new Date(repository.pushed_at);
    const now = new Date();
    const gap = now.getTime() - pushed_at.getTime();
    let time;

    if (Math.floor(gap / year) > 0) {
        time = Math.round(gap / year) + " years ago";
    } else {
        if (Math.floor(gap / month) > 0) {
            time = Math.round(gap / month) + " months ago";
        } else {
            if (Math.floor(gap / day) > 0) {
                time = Math.round(gap / day) + " days ago";
            } else {
                if (Math.floor(gap / hour) > 0) {
                    time = Math.round(gap / hour) + " hours ago";
                } else {
                    if (Math.floor(gap / min) > 0) {
                        time = Math.round(gap / min) + " minutes ago";
                    } else {
                        time = Math.round(gap / sec) + " seconds ago";
                    }
                }
            }
        }
    }

    return (
        <Repository>
            <Title>{repository.name}</Title>
            <SubTitle>{repository.description}</SubTitle>
            <Detail>
                {repository.language !== null ? <SubTitle style={{marginRight: "10px"}}>{repository.language}</SubTitle> : null}
                <SubTitle>{"Updated " + time}</SubTitle>
            </Detail>
        </Repository>
    )
}

export default RepositoryCard;
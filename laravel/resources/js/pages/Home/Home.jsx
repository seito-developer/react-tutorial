import React, { useEffect, useState } from "react";
import Board from "../../components/Board/Board";
import { getBoards } from "../../api";
import AddBoard from "../../components/AddBoard/AddBoard";
import Layout from "../../components/Layout/Layout";
import "./Home.scss";

const Home = () => {
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState("");

    const componentDidMount = async () => {
        try {
            const response = await getBoards();
            console.log("response:", response);
            setBoards(response);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        componentDidMount();
    }, []);

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    <Board boards={boards} error={error} />
                    <AddBoard onBoardAdded={componentDidMount} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;

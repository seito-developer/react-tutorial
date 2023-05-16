import React, { useEffect, useState } from "react";
import Board from "../../components/Board";
import { getBoards } from "../../api";
import AddBoard from "../../components/AddBoard";
import Layout from "../../components/Layout/Layout";

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
            <Board boards={boards} error={error} />
            <AddBoard onBoardAdded={componentDidMount} />
        </Layout>
    );
};

export default Home;

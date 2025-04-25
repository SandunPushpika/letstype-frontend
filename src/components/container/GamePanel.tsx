import TypingBox from "./TypingBox";

interface params{
    time: number,
    level: string
}

const GamePanel: React.FC<params> = (params) => {

    const paragraph = "Technology has transformed the way we live, work, and communicate. From the rise of artificial intelligence to the expansion of cloud computing, innovations continue to reshape industries and improve efficiency. The internet has made information more accessible than ever, enabling people to learn new skills and connect globally. As advancements in automation and machine learning progress, ethical considerations and cybersecurity become increasingly important. While technology offers countless benefits, it also presents challenges that require responsible use and continuous adaptation to an ever-changing digital landscape.";

    return (
        <div className="text-white font-roboto-mono">
            <div>
                <h1>Timer!</h1>
            </div>
            <TypingBox text={paragraph}></TypingBox>
        </div>
    );
}

export default GamePanel;
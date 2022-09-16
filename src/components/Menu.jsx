import { useSelector } from 'react-redux';

const Menu = () => {
    const tasks = useSelector((state) => state.task.tasks);

    return (
        <ul className={'menu'}>
            {
                tasks.map((element) => {
                    return <li key={element.id}>{element.title}</li>
                })
            }
        </ul>
    );
}

export default Menu;
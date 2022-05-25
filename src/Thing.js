const Thing = ({index, thing, done, cross, changeItem, editItem, delItem, crossItem}) => {

    return (<>        
        <tr>
            <td>
                {!done ?
                    <span
                        onClick={() => editItem(index, true)}
                        onContextMenu={event => crossItem(event, index)}
                        className={cross ? 'cross' : ''}
                    >
                        {thing}
                    </span>
                        :
                    <input
                        value={thing}
                        onBlur={() => editItem(index, false)}
                        onChange={event => changeItem(event, index)}
                    />
                }
            </td>
            <td>
                <button onClick={() => delItem(index)}>X</button>
            </td>
        </tr>
    </>)
}

export default Thing
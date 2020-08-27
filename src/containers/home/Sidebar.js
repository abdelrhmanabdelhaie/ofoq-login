import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar({ items }) {
    return (
        <div >
            <List disablePadding dense>
                {items.map(({ label, name, href, ...rest }) => (
                    <ListItem key={name} button {...rest}>
                        <a href={href}>{label} </a>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
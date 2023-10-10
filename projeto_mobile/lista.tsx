type ListaFlatProps = {
    array: {key: number; descricao: String }[]

}

const ListaFlat = {props: ListaFlatProps} => {
    return <FlatList
        data={props.array}
        renderItem{({ item }) = (
            <Text style={styles.item}>{item.descricao}</Text>)}
    />
}

export default ListaFlat;

const styles = StyleSheet.create({
    item
})


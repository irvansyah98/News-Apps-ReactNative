import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const Card = props => {
    
        const dispatch = useDispatch();

        const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));

        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('NewsDetailScreen',{
                    articleUrl: props.url
                })}
            }>
                <View style={styles.card}>
                    <View style={styles.imageWrapper}>
                        <Image 
                            source={{uri: props.image}}
                            style={styles.image}
                            />
                    </View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>
                            {props.title && props.title.length > 25 ? props.title.slice(0,25) + '...' : props.title}
                        </Text>
                        <MaterialIcons 
                            name={ isFav ? 'favorite' : "favorite-border" } 
                            size={24}
                            onPress={() => {
                                dispatch(newsAction.toggleFavorites(props.url))
                            }}
                            />
                    </View>
                    <View style={styles.descWrapper}>
                        <Text style={styles.desc}>
                            {props.description && props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#ffffff',
        height:300,
        margin:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        elevation: 5
    },
    imageWrapper:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        height:'100%',
        width:'100%'
    },
    titleWrapper:{
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop:10
    },
    descWrapper:{
        paddingHorizontal:15
    },
    title:{
        fontSize:20,
    },
    desc:{
        fontSize:14,
    }
});

export default Card;
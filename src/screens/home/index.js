import { FlatList, Image ,ScrollView,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import primeVideoLogo from "../../assets/prime_video.png";
import amazonLogo from "../../assets/amazon_logo.png";
import TheWhellOfTime from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/movieCard";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";


export const Home = ( ) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.PrimeLogoImg} source={primeVideoLogo}/>
                <Image style={styles.AmazonLogoImg} source={amazonLogo}/>
            </View>


            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>

            </View>
            
            <TouchableOpacity style={styles.MovieImageThumbnail}>
                <Image source={TheWhellOfTime} style={styles.movieImage}/>
            </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false} syle={styles.contentMovies}>

            <Text style={styles.moviesText}>Continue Watching</Text>
        
            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard moviesURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.moviesText}>Crimes Movies</Text>

            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard moviesURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.moviesText}>Wacth in your language</Text>

            <FlatList style={styles.footerMovie}
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard moviesURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />

        </ScrollView>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    AmazonLogoImg: {
        marginTop: -32,
        marginLeft: 30
    },

    category:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,

    },

    categoryText:{
        fontSize: 14,
        fontWeight: "700",
        color: "#FFF",
    },

    moviesText:{
        color: "#FFF",
        fontSize: 14,
        fontWeight: "700",
        padding: 15
    },

    MovieImageThumbnail:{
        width: "100%",
        alignItems: "center",
    },

    movieImage:{
        width: "100%"
    },

    contentList:{
        paddingleft: 18,
        paddingRight: 30,
    },

    contentMovies:{

    },

    footerMovie:{
        marginBottom: 20
    }

    
});
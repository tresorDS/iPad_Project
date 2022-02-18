import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import ErpMenu from '../../ErpMenu';

const Iphone12 = ({navigation}) => {
  let productData = ErpMenu();

  //Remaining Quantity for IPHONE 12 64 GB-----------//
  const filteredDataIphone1264 = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 12' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '64 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 128 GB-----------//
  const filteredDataIphone12128 = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 12' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '128 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 256 GB-----------//
  const filteredDataIphone12256 = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 12' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '256 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  //Remaining Quantity for IPHONE 12 512 GB-----------//
  const filteredDataIphone12512 = productData
    .filter((item) => {
      return (
        item.Category_4 === 'iPhone 12' &&
        item.Item_Category_Code === 'A15' &&
        item.Category_5 === '512 GB'
      );
    })
    .map(function ({Category_6, Remaining_Qty, Location_Code}) {
      return {Category_6, Remaining_Qty, Location_Code};
    });

  // console.log('filtered data is Watches', filteredDataWatches);

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  //   let totalAmount = sumProperty(productData, 'Remaining_Qty');

  let totalAmountFilteredDataIphone1264 = sumProperty(
    filteredDataIphone1264,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone12128 = sumProperty(
    filteredDataIphone12128,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone12256 = sumProperty(
    filteredDataIphone12256,
    'Remaining_Qty',
  );
  let totalAmountFilteredDataIphone12512 = sumProperty(
    filteredDataIphone12512,
    'Remaining_Qty',
  );

  let data = [
    {
      id: 1,
      view: 'Iphone1264GB',
      title: '64 GB',
      image:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
      Quantity: `${totalAmountFilteredDataIphone1264}`,
    },
    {
      id: 2,
      view: 'Iphone12128GB',
      title: '128 GB',
      image:
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/03/iphone-se.png',
      Quantity: `${totalAmountFilteredDataIphone12128}`,
    },
    {
      id: 3,
      view: 'Iphone12256GB',
      title: '256 GB',
      image: 'https://images.financialexpress.com/2021/09/iphone-13-main.png',
      Quantity: `${totalAmountFilteredDataIphone12256}`,
    },
    {
      id: 4,
      view: 'Iphone12512GB',
      title: '512 GB',
      image:
        'https://static.wikia.nocookie.net/ipod/images/a/ae/IPhone_12_colors.png/revision/latest?cb=20201014130133',
      Quantity: `${totalAmountFilteredDataIphone12512}`,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.view)}>
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View style={styles.cardHeader}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.quantity}>
                    Quantity Av.. {item.Quantity}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Iphone12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  quantity: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
    marginBottom: 20,
  },
});

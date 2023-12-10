import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import{ ImagesAssets } from '../assets/ImagesAssets';

export default function Resume({ navigation, route }) {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.photo} source={ImagesAssets.bannerList1}/>
            <Text style={styles.name}>Melbourne T Turnbull IV</Text>
            <Text style={styles.title}>Software Engineer</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <View style={styles.sectionContent}>
                <Text style={styles.sectionItem}>
                  B.S. in Computer Science, Mansfield University of Pennsylvania
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <View style={styles.sectionContent}>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Software Development UI/UX Engineer, Corning Incorporated (2021-2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Developed WPF applications for measuring the strength of glass
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Constructed multiple REST APIs for system automation and data tracking 
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Diagnosed and fixed various hardware and software bugs 
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Added various features to aid the operation and functionality of the systems 
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Created, conducted and revised tests and testing methodologies 
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Worked within an agile development system 
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Software Developmer Intern, Corning Mueseum of Glass (2019)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Develop and maintain efficient and reliable software solutions that meet the needs of the Corning Museum of Glass, focusing on improving the online security of the other workers at the museum. 
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              
            <Text style={styles.sectionTitle}>Projects</Text>
              <View style={styles.sectionContent}>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Java Spring boot API  (2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - An API built using Java, Spring boot, and GraphQL. This API was a small project that i used to learn Spring boot and GraphQL.
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    React Native Resume App (2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - The app that you are currently running is a React Native application that I built to learn React Native and have a nice place to show my resume. There is also a second page that uses the NewsAPI to pull recent news articles and displays them. If you click on the articles, the full article will be pulled up.
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Gorilla Insight (2021-2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Software suite that contains various pieces of software related to Gorilla Glass Metrology.
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Insight API (2021-2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - An ASP.NET web API built into Gorilla Insight that allows integration with various automated systems as well as providing additional information to developers to aid in debugging. A SQLite in-memory database was used to keep temporary data stored locally on machines. 
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Measurement Tracking API (2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - Another ASP.NET web API that was integrated with systems inside the facility to store measurement data. This also integrated with an MS SQL Server database to store data to be used in the Metrology Dashboard project. 
                  </Text>
                </View>
                <View style={styles.sectionItem}>
                  <Text style={styles.sectionItemTitle}>
                    Metrology Dashboard (2023)
                  </Text>
                  <Text style={styles.sectionItemDesc}>
                    - An ASP.NET Blazor application used to monitor and analyze data. Scientists and Engineers can easily access a large set of measurement data and view the data in graphs or download large datasets to excel.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
        marginTop:40,
        backgroundColor:'white'
      },
      header: {
        alignItems: 'center',
        marginBottom: 16,
      },
      photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      name: {
        fontSize: 24,
        fontWeight: '600',
      },
      title: {
        fontSize: 16,
        color: 'gray',
      },
      body: {},
      section: {
        marginBottom: 16,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
      },
      sectionContent: {
        marginTop: 8,
      },
      sectionItem: {
        marginVertical: 4,
      },
      sectionItemTitle: {
        fontSize: 16,
        fontWeight: '600',
      },
      sectionItemDesc: {
        fontSize: 15,
        color: 'gray',
      },
    });
    
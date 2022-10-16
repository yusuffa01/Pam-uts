import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Linking} from 'react-native'

class Inputs extends Component {
   state = {Tinggi: '', Berat: '', bmi: '',BmiResult: '',
   }
   handleTinggi = (text) => {
      this.setState({ Tinggi: text })
   }
   handleBerat = (text) => {
      this.setState({ Berat: text })
   }
   calculate = (Tinggi, Berat) => {
      var result = (parseFloat(Berat)*10000)/(parseFloat(Tinggi)*parseFloat(Tinggi));
      result = result.toFixed(2);
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Berat Badan Kurus'})
      }
      else if(result>=18.5&&result<25){
          this.setState({BmiResult:'Berat badan normal'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Berat Badan normal atau yang ideal'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Berat Badan agak gemuk atau Buncit'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Gemuk'})
      }
      else{
         alert('Harap masukan angka bukan huruf!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>Kalkulator BMI</Text>
            <Text  style = {styles.label}>Tinggi Badan</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Tinggi (Cm)"
               autoCapitalize = "none"
               onChangeText = {this.handleTinggi}/>
<Text  style = {styles.label}>Berat Badan</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Berat (Kg)"
               autoCapitalize = "none"
               onChangeText = {this.handleBerat}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.Tinggi, this.state.Berat)
               }>
               <Text style = {styles.submitButtonText}> Hitung </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
            <Text style={{ marginLeft: 10,marginRight:10, flexDirection: 'row', color: '#4a1db3' }}
            onPress={() => Linking.openURL('https://www.halodoc.com/artikel/intip-cara-hitung-berat-badan-ideal-dengan-body-mass-index-bmi')}>
            Tekan ini untuk penjelasan Lebih lanjut mengenai BMI
        </Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {paddingTop: 23,backgroundColor: '#93eb86'},
   input: {margin: 15,Tinggi: 40,borderWidth: 1,padding: 10,},
   submitButton: {backgroundColor: '#428c37',padding: 10,margin: 15,Tinggi: 40,},
   submitButtonText:{textAlign: "center",color: 'white',fontSize: 18,},
   output:{textAlign: "center",fontSize: 40,},
   title:{paddingTop:40,paddingBottom:10,textAlign: "center",fontSize: 40,fontBerat:"bold",},
   resultText:{paddingTop:30,paddingBottom:20,textAlign: "center",fontSize: 40,color: 'white'},
   label:{marginLeft: 15,}
})
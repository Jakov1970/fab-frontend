import { Box, Container, FormLabel, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { styleProps } from '../Login/styleProps'
import { columns, DashboardCardsData, data } from './DashboardCardsData'
import arrowIcon from '../images/arrowIcon.png'
import icon from '/images/icon.png'
import leftArrowIcon from '../images/leftArrowIcon.png'
import { DataTable } from './DashboardTable'

export const Dashboard = () => {

  const { screen, cardsLayout, cardDesign, cardImage, cardTitle } = styleProps

  return (
    // <Box {...screen}>
    //   <HStack {...cardsLayout}>
    //     {DashboardCardsData.map((card: any) => (
    //       <Container {...cardDesign}>
    //         <Box {...cardImage}>
    //           {card.image}
    //         </Box>
    //         <FormLabel {...cardTitle}>
    //           {card.title}

    //         </FormLabel>
    //         <Box>
    //           {card.description}

    //         </Box>
          
    //       </Container>
    //     ))}
    //   </HStack>
    //   <Box>
    //     TABELA
    //   </Box>
    // </Box>
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '90%', marginBottom: '50px', marginTop: '100px'}}>
      <div style={{height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <div style={{marginLeft: '40px', color: '#00273B', fontWeight: '500', fontSize: '25px'}}>
          Hi Sonja!
        </div>
        <div style={{width: '306px', height: '60px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#00273B', fontWeight: '400', fontSize: '18px', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', border: '1px solid #E2ECF2', borderRadius: '3px'}}>
          <div style={{marginLeft: '20px', marginRight: '20px'}}>
            <img src={leftArrowIcon} alt="" />
          </div>
          Functierapport downloaden
        </div>
      </div>
      <div style={{padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        {
          DashboardCardsData.map((card: any) => (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between' , height: '316px', backgroundColor: '#ffffff', width: '100%', margin: '20px', padding: '30px'}}>
              <div style={{}}>
                {card.image}
              </div>
              <div style={{fontWeight: '400', fontSize: '25px', color: '#00273B', fontFamily: ''}}>
                {card.title}
              </div>
              <div style={{color: '#91A2AA', fontWeight: '400', fontSize: '16px'}}>
                {card.description}
              </div>
              <div style={{cursor: 'pointer', color: '#6474AC', fontWeight: '400', fontSize: '18px', display: 'flex', flexDirection: 'row'}}>
                Bekijken
                <div style={{marginLeft: '10px'}}>
                  <img src={arrowIcon} alt="" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div style={{height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '50px'}}>
        <div style={{color: '#00273B', fontWeight: '500', fontSize: '18px', paddingLeft: '40px'}}>
          Recente activiteten
        </div>
        <div style={{cursor: 'pointer', color: '#6474AC', fontWeight: '400', fontSize: '18px', display: 'flex', flexDirection: 'row'}}>
          Bekijk alle activiteiten
          <div style={{marginLeft: '10px'}}>
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

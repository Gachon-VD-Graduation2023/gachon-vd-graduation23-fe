import { WorkListData, WorkDetailData } from '@/types/works.type'

export const getAllWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workList.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getBxWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workListB.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getMediaWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workListM.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getUxuiWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workListU.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getGraphicWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workListG.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getIllustrationWorkList = async (): Promise<WorkListData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/workListI.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work list:', error)
    return []
  }
}

export const getWorkDetailData = async (workId: string): Promise<WorkDetailData> => {
  try {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/works/${workId}.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching work data:', error)
    return {
      artistEmail: [],
      artistImg: [],
      artistInsta: [],
      artistName: [],
      workDetImgList: [],
      workDetail: '',
      workId: 0,
      workName: '',
      workObj: '',
      workVid: [],
      workbanner: '',
    }
  }
}

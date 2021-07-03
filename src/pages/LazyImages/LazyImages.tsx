/* eslint-disable camelcase */
import React, { useReducer, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { useFetch, useInfiniteScroll } from '../../utils/customHooks'
import LazyLoad from '../../components/LazyLoad/LazyLoad';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LazyImagesProps {}

const LazyImages: React.FC<LazyImagesProps> = () => {
  const initialImagesState = { images: [], fetching: false }

  type IMAGESACTIONTYPE =
    | { type: 'STACK_IMAGES'; images: any }
    | { type: 'FETCHING_IMAGES'; fetching: boolean }

  const initialPageState = { page: 0 }

  type PAGEACTIONTYPE = { type: 'ADVANCE_PAGE' }

  const imgReducer = (
    state: typeof initialImagesState,
    action: IMAGESACTIONTYPE
  ) => {
    switch (action.type) {
    case 'STACK_IMAGES':
      return { ...state, images: state.images.concat(action.images) }
    case 'FETCHING_IMAGES':
      return { ...state, fetching: action.fetching }
    default:
      return state
    }
  }

  const pageReducer = (
    state: typeof initialPageState,
    action: PAGEACTIONTYPE
  ) => {
    switch (action.type) {
    case 'ADVANCE_PAGE':
      return { ...state, page: state.page + 1 }
    default:
      return state
    }
  }

  const [imgData, imgDispatch] = useReducer(imgReducer, {
    images: [],
    fetching: true,
  })
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })

  const bottomBoundaryRef = useRef(null)
  useFetch(pager, imgDispatch)
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch)

  return (
    <div className="">
      <ErrorBoundary>
        <Container id="images">
          <Row style={{ justifyContent: 'center' }}>
            {imgData.images.map((image: any, index: number) => {
              const { author, download_url } = image
              return (
              // eslint-disable-next-line react/no-array-index-key
                <Card key={index} style={{ width: '18rem' }}>
                  <LazyLoad rootMargin="200px">
                    <Card.Img
                      alt="https://picsum.photos/id/870/300/300?grayscale&blur=2"
                      src={download_url}
                      variant="top"
                    />
                  </LazyLoad>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Shot by: {author}</small>
                  </Card.Footer>
                </Card>
              )
            })}
          </Row>
        </Container>

        {imgData.fetching && (
          <div className="text-center bg-secondary m-auto p-3">
            <p className="m-0 text-white">Getting images</p>
          </div>
        )}
        <div
          id="page-bottom-boundary"
          style={{ border: '1px solid red' }}
          ref={bottomBoundaryRef}
        />
      </ErrorBoundary>
    </div>
  )
}

export default LazyImages;
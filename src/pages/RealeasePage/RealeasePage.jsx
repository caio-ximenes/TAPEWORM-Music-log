import React from 'react'
import PageHeader from '../../components/shared/PageHeader/PageHeader'
import { useLoaderData } from 'react-router-dom';

export function realeaseLoader({params}) {
    const nomeDoRelease = params.release;
    return nomeDoRelease;
}

function RealeasePage() {
  const data = useLoaderData();  
  return (
    <div>{data}</div>
  )
}

export default RealeasePage
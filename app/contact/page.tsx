'use client'

import { useState } from 'react'
import AddressForm from './address-form'
import CommentForm from './comment-form'
import ContactMethodForm from './contact-method-form'
import NameForm from './name-form'
import { FullName } from '@/types/full-name.type'
import { Address } from '@/types/address.type'
import { FormatName } from '@/lib/format-name'
import { graphQlUrl } from '@/lib/graphql-url'
import { CREATE_CONTACT_MUTATION } from '@/graphql/mutations/create-contact'
import { RemoveBlanks } from '@/lib/remove-blanks'
import Head from 'next/head'

type ContactType = {
	Name: FullName
	Address: Address
	Email: string
	EmailType: string
	Phone: string
	PhoneType: string
	Preferred: string
	Subject: string
	Message: string
}

const blankContact: ContactType = {
	Name: {
		Salutation: '',
		First: '',
		Middle: '',
		Last: '',
		Suffix: '',
	},
	Address: {
		Address: '',
		Suite: '',
		City: '',
		State: '',
		Zip: '',
	},
	Email: '',
	EmailType: 'Work',
	Phone: '',
	PhoneType: 'Work',
	Preferred: 'Email',
	Subject: '',
	Message: '',
}

export default function ContactPage() {
	const [contact, setContact] = useState<ContactType>(blankContact)
	const [ready, setReady] = useState<boolean>(false)
	const [sent, setSent] = useState<boolean>(false)

	const toggle = (id: string) => {
		let el
		const contents = document.getElementsByClassName('accordion-content')
		for (let i = 0; i < contents.length; i++) {
			el = document.getElementById(contents[i].id)
			if (el) {
				if (el.id == id) {
					if (el.classList.contains('open')) {
						el.classList.remove('open')
					} else el.classList.add('open')
				} else {
					el.classList.remove('open')
				}
			}
		}
	}

	const fieldChanged = (ev: any) => {
		const { name, value } = ev.target
		let newContact: ContactType = { ...contact }
		if (name.includes('.')) {
			const [key1, key2] = name.split('.')
			if (key1 == 'Name') {
				let newName: FullName = { ...contact.Name }
				switch (key2) {
					case 'Salutation':
						newName.Salutation = value
						break
					case 'First':
						newName.First = value
						break
					case 'Middle':
						newName.Middle = value
						break
					case 'Last':
						newName.Last = value
						break
					case 'Suffix':
						newName.Suffix = value
						break
				}
				newContact.Name = newName
			} else if (key1 == 'Address') {
				let newAddress: Address = { ...contact.Address }
				switch (key2) {
					case 'Address':
						newAddress.Address = value
						break
					case 'Suite':
						newAddress.Suite = value
						break
					case 'City':
						newAddress.City = value
						break
					case 'State':
						newAddress.State = value
						break
					case 'Zip':
						newAddress.Zip = value
						break
				}
				newContact.Address = newAddress
			}
		} else {
			switch (name) {
				case 'Email':
					newContact.Email = value
					break
				case 'EmailType':
					newContact.EmailType = value
					break
				case 'Message':
					newContact.Message = value
					break
				case 'Phone':
					newContact.Phone = value
					break
				case 'PhoneType':
					newContact.PhoneType = value
					break
				case 'Preferred':
					newContact.Preferred = value
					break
				case 'Subject':
					newContact.Subject = value
					break
			}
		}
		checkReady(newContact)
		setContact(newContact)
	}

	const checkReady = (current: ContactType) => {
		let valid = true
		if (!FormatName(current.Name)) valid = false
		if (!(current.Email || current.Phone)) valid = false
		if (!(current.Subject && current.Message)) valid = false
		setReady(valid)
	}

	const sendContact = async () => {
		const { data } = await fetch(graphQlUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: CREATE_CONTACT_MUTATION,
				variables: RemoveBlanks(contact),
			}),
		}).then((res) => res.json())
		if (data.createContact) {
			setContact(blankContact)
			checkReady(blankContact)
			setSent(true)
		}
	}

	return (
		<div id="contact-page">
			<Head>
				<title>Jeff Rossi | Contact Me</title>
			</Head>
			<h1>Contact Me</h1>
			{sent ? (
				<div>Thank You, for sending a message.</div>
			) : (
				<div id="contact-accordion">
					<div id="name-accordion">
						<button
							onClick={() => toggle('name-content')}
							className="accordion"
						>
							Name
						</button>
						<div id="name-content" className="accordion-content open">
							<NameForm fieldChanged={fieldChanged} />
						</div>
					</div>

					<div id="address-accordion">
						<button
							onClick={() => toggle('address-content')}
							className="accordion"
						>
							Address
						</button>
						<div id="address-content" className="accordion-content">
							<AddressForm fieldChanged={fieldChanged} />
						</div>
					</div>

					<div id="methods-accordion">
						<button
							onClick={() => toggle('methods-content')}
							className="accordion"
						>
							Contact Methods
						</button>
						<div id="methods-content" className="accordion-content">
							<ContactMethodForm fieldChanged={fieldChanged} />
						</div>
					</div>

					<div id="comment-accordion">
						<button
							onClick={() => toggle('comment-content')}
							className="accordion"
						>
							Comment
						</button>
						<div id="comment-content" className="accordion-content">
							<CommentForm fieldChanged={fieldChanged} />
						</div>
					</div>
					{ready && (
						<button onClick={sendContact} className="contact">
							Send Contact
						</button>
					)}
				</div>
			)}
		</div>
	)
}

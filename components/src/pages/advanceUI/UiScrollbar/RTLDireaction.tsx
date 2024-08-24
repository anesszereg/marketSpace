import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const RTLDireaction = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">RTL Direction</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-simplebar-direction="rtl"</code> attribute and add <code>max-height: **px</code> to set simplebar at right side.</p>

                            <div className="mx-n3">
                                <SimpleBar data-simplebar-direction="rtl" style={{ maxHeight: "220px" }} className="px-3">
                                    <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                    <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                    <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                    <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                </SimpleBar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RTLDireaction;